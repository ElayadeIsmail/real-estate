import { NextFunction, Request, Response } from 'express';

export const logger = async (req: Request, _: Response, next: NextFunction) => {
    // console.log(`${new Date().toLocaleTimeString()} -- ${req.method} to '${req.originalUrl}'`)
    console.log(
        `${req.method} '${
            req.originalUrl
        }' -- ${new Date().toLocaleTimeString()}`,
    );
    next();
};
