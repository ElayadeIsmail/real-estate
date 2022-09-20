import { currentUser, errorHandler } from '@common/middlewares';
import { router } from '@routes/index';
import express from 'express';
import 'express-async-errors';
import { join } from 'path';

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

router(app);

app.use(errorHandler);

export { app };
