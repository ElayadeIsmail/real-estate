import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors';
import { deleteUserIfNotConfirmedQueue } from '../queues/delete-user-if-not-confirmed';
import { sendEmail } from '../services/email';
import { PasswordService } from '../services/password-service';
import { prisma } from '../services/prisma';
import { redis } from '../services/redis';
import { createConfirmationUrl } from '../utils';
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
    if (!user.isConfirmed) {
        throw new BadRequestError('you need to confirm your email');
    }
    // generate a token
    const userJwt = jwt.sign(
        {
            email: user.email,
            id: user.id,
        },
        process.env.JWT_SECRET,
    );
    excludeFields(user, 'password');
    res.send({ accessToken: userJwt, user });
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

    const confirmationUrl = await createConfirmationUrl(newUser.id);
    // 4. Send a confirmation email to the user
    await sendEmail(
        newUser.email,
        'Confirm your email',
        `<a target="_blank" href="${confirmationUrl}">Click Here to confirm your email</a>`,
    );

    // add user to queue for deleting if not confirmed after one day
    deleteUserIfNotConfirmedQueue.add(
        { userId: newUser.id },
        {
            delay: 1000 * 60 * 60 * 24, // 1 day
        },
    );
    res.status(200).send({ message: 'Please Confirm you email' });
};

// router for getting the current user
const currentUser = (req: Request, res: Response) => {
    res.send({ currentUser: req?.currentUser || null });
};

const confirmUser = async (req: Request, res: Response) => {
    const { token } = req.params;
    const userId = await redis.get(token);
    if (!userId) {
        throw new BadRequestError('Invalid token');
    }
    await Promise.all([
        redis.del(token),
        prisma.user.update({
            where: {
                id: parseInt(userId),
            },
            data: {
                isConfirmed: true,
            },
        }),
    ]);
    res.send({ message: 'User confirmed' });
};

export default { login, register, currentUser, confirmUser };
