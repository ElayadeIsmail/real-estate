import express from 'express';
import { citiesController } from '../controllers';

const router = express.Router();

router.get('/', citiesController.findAll);

export { router as citiesRouter };
