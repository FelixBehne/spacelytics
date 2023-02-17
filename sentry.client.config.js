// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://556c3fd2d4504c2dae2668632f4bcee1@o4504696649220096.ingest.sentry.io/4504696650465280',
  tracesSampleRate: 1.0,
  autoSessionTracking: false,
});
