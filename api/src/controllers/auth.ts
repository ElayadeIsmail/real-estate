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

const register = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phone } = req.body;
    // 1. Check if a user exists with the given email
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    // 2. If a user exists, throw an error
    if (user) {
        throw new BadRequestError('Email already exists');
    }
    // hash the password
    const hashedPassword = await PasswordService.toHash(password);
    // 3. Create a new user
    const newUser = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
        },
    });

    // 4. Generate a token
    const userJwt = jwt.sign(
        {
            email: newUser.email,
            id: newUser.id,
        },
        process.env.JWT_SECRET,
    );
    // 5. Set the JWT as a cookie on the response
    req.session = {
        jwt: userJwt,
    };

    // remove the password from the user object
    excludeFields(newUser, 'password');
    res.status(200).send(newUser);
};

// router for getting the current user
const currentUser = (req: Request, res: Response) => {
    res.send({ currentUser: req?.currentUser || null });
};

// router for logging out
const logout = (req: Request, res: Response) => {
    // 1. Clear the JWT cookie
    req.session = null;
    res.send({});
};

export default { login, register, currentUser, logout };
