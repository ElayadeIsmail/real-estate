import 'dotenv-safe/config';
import { app } from './app';

const start = () => {
    app.listen(process.env.PORT, () => {
        console.log('LISTENING ON PORT ' + process.env.PORT);
    });
};

start();
