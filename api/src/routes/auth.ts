import express from 'express';
import { check } from 'express-validator';
import { authController } from '../controllers';
import { validateRequest } from '../middlewares';

const router = express.Router();

router.post(
    '/login',
    [
        check('email').isEmail().withMessage('Email must be valid'),
        check('password')
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
        check('firstName')
            .notEmpty()
            .withMessage('You must supply a first name')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('First name must be between 3 and 15 characters'),
        check('lastName')
            .notEmpty()
            .withMessage('You must supply a last name')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('Last name must be between 3 and 15 characters'),
        check('phone')
            .isMobilePhone('ar-MA')
            .withMessage('Phone must be valid'),
        check('email').isEmail().withMessage('Email must be valid'),
        check('password')
            .isStrongPassword({
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            })
            .withMessage(
                'Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one number, and one character',
            ),
        check('confirmedPassword')
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

router.get('/currentuser', authController.currentUser);

export { router as authRouter };
