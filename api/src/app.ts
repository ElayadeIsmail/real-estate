import express from 'express';
import 'express-async-errors';
import { join } from 'path';
import { IS_PROD } from './common/constants';
import { currentUser, errorHandler, logger } from './common/middlewares';
import { router } from './routes';

// Create a new express application
const app = express();

// Set up the express application to use JSON middleware
app.use(express.json({ limit: '30mb' }));

// Set up the express application to use the serve static assets middleware
app.use(express.static(join(__dirname, '..', 'public')));

// Set up route for serving uploaded files
app.use('upload', express.static(join(__dirname, '..', 'public', 'upload')));

// add the currentUser middleware to all routes
app.use(currentUser);

// add logger middleware if is not prof
if (!IS_PROD) {
    app.use(logger);
}

router(app);

app.use(errorHandler);

export { app };
