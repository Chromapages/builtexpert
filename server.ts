import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Import API handlers (using .ts since we run with tsx)
// @ts-ignore - Ignore type mismatches between http.IncomingMessage and express.Request
import leadIntake from './api/lead-intake.ts';
// @ts-ignore
import createAuditSession from './api/create-audit-session.ts';
// @ts-ignore
import hvacAuditIntake from './api/hvac-audit-intake.ts';
// @ts-ignore
import stripeWebhook from './api/stripe-webhook.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Default port for most Node.js deployment platforms
const port = process.env.PORT || 3000;

// Logging middleware
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * 1. Stripe Webhook (Pre-BodyParser)
 * Must read raw body stream, handled internally by the stripe handler
 */
app.post('/api/stripe-webhook', async (req, res) => {
  try {
    await stripeWebhook(req as any, res as any);
  } catch (err) {
    console.error('Stripe Webhook Error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

/**
 * 2. Standard Body Parser (Post-Stripe)
 * Encodes JSON bodies for standard API endpoints
 */
app.use(express.json());

/**
 * 3. Mount Backend API Endpoints
 */
app.post('/api/lead-intake', async (req, res) => {
  try {
    await leadIntake(req as any, res as any);
  } catch (err) {
    console.error('Lead Intake Endpoint Error:', err);
    res.status(500).json({ error: 'Service temporarily unavailable' });
  }
});

app.post('/api/create-audit-session', async (req, res) => {
  try {
    await createAuditSession(req as any, res as any);
  } catch (err) {
    console.error('Create Audit Session Endpoint Error:', err);
    res.status(500).json({ error: 'Service temporarily unavailable' });
  }
});

app.post('/api/hvac-audit-intake', async (req, res) => {
  try {
    await hvacAuditIntake(req as any, res as any);
  } catch (err) {
    console.error('HVAC Audit Intake Endpoint Error:', err);
    res.status(500).json({ error: 'Service temporarily unavailable' });
  }
});

/**
 * 4. Serve Static Frontend Files
 */
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

/**
 * 5. Catch-All Route (SPA Support)
 * Redirects all non-API/non-file requests to index.html
 */
app.get('*', (req, res) => {
  // Prevent catching direct asset requests that missed the static middleware
  if (req.url.startsWith('/assets/')) {
    return res.status(404).send('Asset not found');
  }

  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      console.error('Failed to send index.html index file:', err);
      res.status(500).send('Site resources are still loading or unavailable. Please refresh.');
    }
  });
});

app.listen(port, () => {
  console.log(`\n\x1b[32m[BuiltExpert]\x1b[0m Production server running on port ${port}`);
  console.log(`\x1b[32m[BuiltExpert]\x1b[0m Static path: ${distPath}`);
  console.log(`\x1b[32m[BuiltExpert]\x1b[0m Ready to handle refreshes and direct URL access.\n`);
});
