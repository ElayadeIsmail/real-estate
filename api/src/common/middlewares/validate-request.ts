import { RequestValidatorError } from '@common/errors';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validateRequest = (
    req: Request,
    _: Response,
    next: NextFunction,
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidatorError(errors.array());
    }
    next();
};
