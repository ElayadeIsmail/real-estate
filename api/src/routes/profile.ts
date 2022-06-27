import express from 'express';
import { profileController } from '../controllers';
import { requireAuth } from '../middlewares';

// Create a new express Router
const router = express.Router();

router.get('/', requireAuth, profileController.get);

router.post('/avatar', requireAuth, profileController.updateAvatar);

router.put('/', requireAuth, profileController.update);

export { router as profileRouter };
