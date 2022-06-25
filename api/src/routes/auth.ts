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
            .notEmpty()
            .withMessage('You must supply a password'),
    ],
    validateRequest,
    authController.login,
);

router.post(
    '/register',
    [
        body('firstName')
            .notEmpty()
            .withMessage('You must supply a firstName')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('First name must be between 3 and 15 characters'),
        body('lastName')
            .notEmpty()
            .withMessage('You must supply a lastName')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('Last name must be between 3 and 15 characters'),
        body('phone').isMobilePhone('ar-MA').withMessage('Phone must be valid'),
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .trim()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            )
            .withMessage(
                'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter, and one special character',
            ),
        body('confirmedPassword')
            .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords must match');
                }
                return value;
            }),
    ],
    validateRequest,
    authController.register,
);

router.post('/logout', authController.logout);

router.get('/currentuser', authController.currentUser);

export { router as authRouter };
