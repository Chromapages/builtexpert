import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { pathToFileURL } from 'url';
import {defineConfig, loadEnv} from 'vite';

const API_ROUTE_MAP: Record<string, string> = {
  '/api/lead-intake': 'api/lead-intake.ts',
  '/api/create-audit-session': 'api/create-audit-session.ts',
  '/api/hvac-audit-intake': 'api/hvac-audit-intake.ts',
  '/api/stripe-webhook': 'api/stripe-webhook.ts',
};

async function readJsonBody(req: NodeJS.ReadableStream) {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return undefined;
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) {
    return undefined;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function apiDevPlugin() {
  return {
    name: 'local-api-routes',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        const url = req.url ? req.url.split('?')[0] : '';
        const routePath = API_ROUTE_MAP[url];

        if (!routePath) {
          next();
          return;
        }

        try {
          const absolutePath = path.resolve(__dirname, routePath);
          const moduleUrl = `${pathToFileURL(absolutePath).href}?t=${Date.now()}`;
          const mod = await import(moduleUrl);
          const handler = mod.default;

          if (typeof handler !== 'function') {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: `API handler missing default export for ${url}` }));
            return;
          }

          if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
            req.body = await readJsonBody(req);
          }

          await handler(req, res);
        } catch (error: any) {
          console.error(`Local API route failed for ${url}:`, error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error: error?.message || `Failed to execute ${url}`,
            }),
          );
        }
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  Object.assign(process.env, env);
  return {
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      minify: 'esbuild',
    },
  };
});
