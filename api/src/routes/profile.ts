import express from 'express';
import { body, check } from 'express-validator';
import { profileController } from '../controllers';
import { requireAuth, upload, validateRequest } from '../middlewares';

// Create a new express Router
const router = express.Router();

// get profile
router.get('/', requireAuth, profileController.get);

// update profile avatar
router.post(
    '/avatar',
    requireAuth,
    upload.single('avatar'),
    check('avatar')
        .custom((_, { req }) => !!req.file)
        .withMessage('You must upload an avatar'),
    validateRequest,
    profileController.updateAvatar,
);

// update profile Phone
router.patch(
    '/',
    requireAuth,
    body('phone').isMobilePhone('ar-MA').withMessage('Phone must be valid'),
    validateRequest,
    profileController.update,
);

export { router as profileRouter };
