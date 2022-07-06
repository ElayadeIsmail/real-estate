import express from 'express';
import { listingsController } from '../controllers';
import { requireAuth } from '../middlewares';

// Create a new express Router
const router = express.Router();

router.post('/', requireAuth, listingsController.create);
router.get('/:id', listingsController.findOne);
router.get('/', listingsController.findAll);
router.put('/:id', requireAuth, listingsController.update);
router.delete('/:id', requireAuth, listingsController.remove);

export { router as listingsRouter };
