import express from 'express';
import 'express-async-errors';
import { join } from 'path';
import { NotFoundError } from './errors';
import { currentUser, errorHandler } from './middlewares';
import { authRouter, profileRouter } from './routes';

// Create a new express application
const app = express();

// Set up the express application to use JSON middleware
app.use(express.json({ limit: '30mb' }));

// Set up the express application to use cookie-session middleware
// app.use(
//     cookieSession({
//         signed: false,
//         secure: process.env.Node_ENV === 'production',
//     }),
// );

// app.use(
//     session({
//         store: new RedisStore({ client: redisClient }),
//         saveUninitialized: false,
//         name: COOKIE_NAME,
//         secret: process.env.SESSION_SECRET!,
//         resave: false,
//         cookie: {
//             secure: IS_PROD,
//             httpOnly: true,
//             sameSite: 'lax',
//             signed: false,
//             maxAge: 1000 * 60 * 60 * 24 * 7,
//         },
//     }),
// );

// Set up the express application to use the serve static assets middleware
app.use(express.static(join(__dirname, '..', 'public')));

// Set up route for serving uploaded files
app.use('upload', express.static(join(__dirname, '..', 'public', 'upload')));

// add the currentUser middleware to all routes
app.use(currentUser);

// register the auth routes
app.use('/auth', authRouter);

// register the profile routes
app.use('/profile', profileRouter);

app.all('*', () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
