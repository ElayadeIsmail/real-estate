import express from 'express';
import { param } from 'express-validator';
import { listingsController } from '../controllers';
import { requireAuth, validateRequest } from '../middlewares';

// Create a new express Router
const router = express.Router();

router.post('/', requireAuth, listingsController.create);
router.get(
    '/:slug',
    param('slug').exists().isSlug().withMessage('Slug must be a valid slug'),
    validateRequest,
    listingsController.findOne,
);
router.get('/', listingsController.findAll);
router.put(
    '/:id',
    requireAuth,
    param('id').exists().toInt(),
    validateRequest,
    listingsController.update,
);
router.delete(
    '/:id',
    requireAuth,
    param('id').exists().toInt(),
    validateRequest,
    listingsController.remove,
);

export { router as listingsRouter };
