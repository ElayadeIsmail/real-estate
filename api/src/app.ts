import express, { Request, Response } from 'express';
import 'express-async-errors';
import { authRouter } from './routes';

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
    res.send('HELLO WORLD');
});

app.use('/auth', authRouter);

export { app };
