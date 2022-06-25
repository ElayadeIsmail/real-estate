import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors';
import { prisma } from '../prisma/prisma';
import { PasswordService } from '../services/password-service';
import { excludeFields } from '../utils/exclude-fields';

// LOGIN ENDPOINT
const login = async (req: Request, res: Response) => {
    // 1. Get the email and password from the request body
    const { email, password } = req.body;
    // 2. Check if a user exists with the given email
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    // 3. If no user exists, throw an error
    if (!user) {
        throw new BadRequestError('Invalid credentials');
    }
    // 4. If a user exists, check if the password is correct
    const isMatch = await PasswordService.compare(user.password, password);
    // 5. If the password is incorrect, throw an error
    if (!isMatch) {
        throw new BadRequestError('Invalid credentials');
    }
    // generate a token
    const userJwt = jwt.sign(
        {
            email: user.email,
            id: user.id,
        },
        process.env.JWT_SECRET,
    );
    req.session = {
        jwt: userJwt,
    };
    excludeFields(user, 'password');
    res.send(user);
};

const register = (req: Request, res: Response) => {
    console.log('REGISTER ENDPOINT');
};

const currentUser = (req: Request, res: Response) => {
    console.log('CURRENT USER ENDPOINT');
};

const logout = (req: Request, res: Response) => {
    console.log('LOGOUT ENDPOINT');
};

export default { login, register, currentUser, logout };
