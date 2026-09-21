# Deployment

The Vite frontend and Express API are separate services. `localhost` works only
on the developer's machine and must never be used as the production API URL.

1. Deploy `server/` to an HTTPS Node host (for example Render or Railway) with
   `npm start` as its start command.
2. On that server, set the values from `server/.env.example`. Set `ORIGINS` to
   include `https://builder-ai-lyart.vercel.app` exactly (and any custom frontend
   domains), and set `NODE_ENV=production` and `COOKIE_SAME_SITE=none`.
3. In the Vercel project whose root directory is `client`, set
   `VITE_BASE_URL` to the public HTTPS API URL, such as
   `https://builder-ai-api.example.com`. Do not set it to `localhost` and do not
   add a trailing slash.
4. Redeploy both services. Vite variables are compiled into the frontend bundle,
   so changing `VITE_BASE_URL` requires a new Vercel deployment.

For local development, leave `VITE_BASE_URL` empty. The proxy in
`client/vite.config.js` will forward `/api` requests to `http://localhost:3000`.
