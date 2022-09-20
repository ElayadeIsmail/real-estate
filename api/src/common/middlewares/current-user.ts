import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// UserPayload is the type of the payload that is sent to the client
interface UserPayload {
    id: number;
    email: string;
}

// add a new property to the Request object
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // if there is no JWT, continue to the next middleware
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return next();
    }
    try {
        // decode the JWT to get the user id and email
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET!,
        ) as UserPayload;
        // add the user to the Request object
        req.currentUser = payload;
    } catch (error) {
        console.log(error);
    }
    // call the next middleware
    next();
};
