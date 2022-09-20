import { NotAuthorizedError } from '@common/errors';
import { NextFunction, Request, Response } from 'express';

export const requireAuth = (req: Request, _: Response, next: NextFunction) => {
    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }
    next();
};
