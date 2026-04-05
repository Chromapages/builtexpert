/**
 * One-time migration: strip `title` (and any other non-standard keys)
 * from reference values stored in the dataset.
 *
 * Sanity refs must only contain: _type, _ref, _weak, _key
 *
 * Usage:
 *   1. Add SANITY_WRITE_TOKEN to your .env file (Editor permission or higher)
 *   2. npx tsx scripts/fix-ref-title.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";

dotenv.config();

const ALLOWED_REF_KEYS = new Set(["_type", "_ref", "_weak", "_key"]);
const PROJECT_ID = "z5yntv5o";
const DATASET = "production";

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-03-27",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Recursively find all paths in an object where a ref has extra keys
function findDirtyRefPaths(
  obj: unknown,
  path = ""
): { path: string; cleanValue: Record<string, unknown> }[] {
  if (!obj || typeof obj !== "object") return [];

  const results: { path: string; cleanValue: Record<string, unknown> }[] = [];
  const record = obj as Record<string, unknown>;

  // Is this object itself a dirty ref?
  if (
    record._type === "reference" &&
    record._ref &&
    Object.keys(record).some((k) => !ALLOWED_REF_KEYS.has(k))
  ) {
    const cleanValue: Record<string, unknown> = {};
    for (const key of Object.keys(record)) {
      if (ALLOWED_REF_KEYS.has(key)) cleanValue[key] = record[key];
    }
    results.push({ path, cleanValue });
    return results; // don't recurse into a ref
  }

  // Recurse into arrays
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      results.push(...findDirtyRefPaths(item, `${path}[${i}]`));
    });
    return results;
  }

  // Recurse into object fields
  for (const [key, value] of Object.entries(record)) {
    if (key.startsWith("_")) continue; // skip meta fields
    results.push(...findDirtyRefPaths(value, path ? `${path}.${key}` : key));
  }

  return results;
}

async function run() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("❌  Set SANITY_WRITE_TOKEN in your .env file first.");
    process.exit(1);
  }

  console.log("🔍  Scanning ALL documents for refs with extra keys...\n");

  // Fetch every document (excluding drafts for now — fix published first)
  const docs: Record<string, unknown>[] = await client.fetch(
    `*[!(_id in path("drafts.**"))][0...5000]`
  );

  console.log(`   Found ${docs.length} documents to scan.\n`);

  let fixedCount = 0;

  for (const doc of docs) {
    const docId = doc._id as string;
    const dirtyPaths = findDirtyRefPaths(doc);

    if (dirtyPaths.length === 0) continue;

    console.log(`⚠️   ${docId} (${doc._type}) — ${dirtyPaths.length} dirty ref(s):`);

    let patch = client.patch(docId);
    for (const { path, cleanValue } of dirtyPaths) {
      console.log(`     set ${path} →`, cleanValue);
      patch = patch.set({ [path]: cleanValue });
    }

    try {
      await patch.commit();
      console.log(`   ✅  Patched\n`);
      fixedCount++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`   ❌  Failed: ${msg}\n`);
    }
  }

  if (fixedCount === 0) {
    console.log("✅  No dirty refs found — dataset is clean.");
  } else {
    console.log(`\n✅  Done. Fixed ${fixedCount} document(s).`);
  }

  // Also patch drafts
  console.log("\n🔍  Scanning drafts...\n");
  const drafts: Record<string, unknown>[] = await client.fetch(
    `*[_id in path("drafts.**")][0...5000]`
  );

  let draftFixedCount = 0;
  for (const doc of drafts) {
    const docId = doc._id as string;
    const dirtyPaths = findDirtyRefPaths(doc);
    if (dirtyPaths.length === 0) continue;

    console.log(`⚠️   DRAFT ${docId} (${doc._type}) — ${dirtyPaths.length} dirty ref(s):`);
    let patch = client.patch(docId);
    for (const { path, cleanValue } of dirtyPaths) {
      console.log(`     set ${path} →`, cleanValue);
      patch = patch.set({ [path]: cleanValue });
    }

    try {
      await patch.commit();
      console.log(`   ✅  Patched\n`);
      draftFixedCount++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`   ❌  Failed: ${msg}\n`);
    }
  }

  if (draftFixedCount === 0) {
    console.log("✅  No dirty refs in drafts.");
  } else {
    console.log(`\n✅  Done. Fixed ${draftFixedCount} draft(s).`);
  }
}

run().catch((err) => {
  console.error("❌ Script failed:", err.message);
  process.exit(1);
});
