import { Express } from 'express';
import { NotFoundError } from '../common/errors';
import { authRouter } from './auth';
import { citiesRouter } from './cities';
import { listingsRouter } from './listings';
import { profileRouter } from './profile';

export const router = (app: Express) => {
    // register the auth routes
    app.use('/auth', authRouter);

    // register the profile routes
    app.use('/profile', profileRouter);

    // register the cities routes
    app.use('/cities', citiesRouter);

    // register the listings routes
    app.use('/listings', listingsRouter);

    app.all('*', () => {
        throw new NotFoundError();
    });
};
