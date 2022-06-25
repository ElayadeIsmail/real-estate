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
            .withMessage('You must supply a first name')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('First name must be between 3 and 15 characters'),
        body('lastName')
            .notEmpty()
            .withMessage('You must supply a last name')
            .isLength({
                min: 3,
                max: 15,
            })
            .withMessage('Last name must be between 3 and 15 characters'),
        body('phone').isMobilePhone('ar-MA').withMessage('Phone must be valid'),
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must supply a password')
            .isLength({
                min: 8,
            })
            .withMessage('Password must be at least 8 characters')
            .matches(/(?=.*?[a-z])/)
            .withMessage(
                'Password must contain at least one lowercase character',
            )
            .matches(/(?=.*?[A-Z])/)
            .withMessage(
                'Password must contain at least one uppercase character',
            )
            .matches(/(?=.*?[0-9])/)
            .withMessage('Password must contain at least one number')
            .matches(/(?=.*?[#?!@$%^&*-])/)
            .withMessage(
                'Password must contain at least one special character',
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
