import express from 'express';
import { body } from 'express-validator';
import { authController } from '../controllers';
import { validateRequest } from '../middlewares';

const router = express.Router();

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .trim()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            )
            .withMessage(
                'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter, and one special character',
            ),
    ],
    validateRequest,
    authController.login,
);

router.post('/register', authController.register);

router.post('/logout', authController.logout);

router.get('/currentuser', authController.currentUser);

export { router as authRouter };
