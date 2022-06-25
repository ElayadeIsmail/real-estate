import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from 'src/errors';

export const requireAuth = (req: Request, _: Response, next: NextFunction) => {
    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }
    next();
};
