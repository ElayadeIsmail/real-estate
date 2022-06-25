import 'dotenv-safe/config';
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
    res.send('HELLO WORLD');
});

app.listen(process.env.PORT, () => {
    console.log('LISTENING ON PORT ' + process.env.PORT);
});
