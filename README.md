# foxcliff chess club website

## updating the schedule

The [NextMeeting component](./src/components/NextMeeting.tsx) currently controls the way information about the next meeting is displayed on the site.

At the top of the file is a list of "alteredMeetings". It includes examples of how to cancel or set a new time to just one meeting. It is safe to delete altered meetings from the list once they've passed.

## developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
