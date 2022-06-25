import express, { Request, Response } from 'express';
import authRouter from './routes/auth';

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
    res.send('HELLO WORLD');
});

app.use('/auth', authRouter);

export { app };
