import express from 'express';
import { body, check } from 'express-validator';
import { requireAuth, upload, validateRequest } from '../common/middlewares';
import { profileService } from '../services';

// Create a new express Router
const router = express.Router();

// get profile
router.get('/', requireAuth, profileService.get);

// update profile avatar
router.post(
    '/avatar',
    requireAuth,
    upload.single('avatar'),
    check('avatar')
        .custom((_, { req }) => !!req.file)
        .withMessage('You must upload an avatar'),
    validateRequest,
    profileService.updateAvatar,
);

// update profile Phone
router.patch(
    '/',
    requireAuth,
    body('phone').isMobilePhone('ar-MA').withMessage('Phone must be valid'),
    validateRequest,
    profileService.update,
);

router.delete('/', requireAuth, profileService.remove);

export { router as profileRouter };
