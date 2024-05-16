// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6fb18fca4ce38206bb8c0ed98affa98f@o4507264138084352.ingest.us.sentry.io/4507264140902400",

  // integrations: [Sentry.replayIntegration()],

  tracesSampleRate: 1,

  debug: false,
});
