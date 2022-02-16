import pino from 'pino';
import { logflarePinoVercel } from 'pino-logflare';

// create pino-logflare console stream for serverless functions and send function for browser logs
// Browser logs are going to: https://logflare.app/sources/13989
// Vercel log drain was setup to send logs here: https://logflare.app/sources/18640

// const { stream, send } = logflarePinoVercel({
//     apiKey: process.env.LOGFARE_API_KEY,
//     sourceToken: process.env.LOGFARE_SOURCE_TOKEN
// });

// create pino logger
// const logger = pino({
//     browser: {
//         transmit: {
//             level: "info",
//             // send: send,
//         }
//     },
//     level: "debug",
//     base: {
//         env: process.env.NODE_ENV,
//         revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
//     },
// });

export default console;
