import cookieSession from 'cookie-session';
import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors';
import { currentUser, errorHandler } from './middlewares';
import { authRouter } from './routes';

const app = express();

app.use(express.json());

app.use(
    cookieSession({
        signed: false,
        secure: process.env.Node_ENV === 'production',
    }),
);

// add the currentUser middleware to all routes
app.use(currentUser);

app.use('/auth', authRouter);

app.all('*', () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
