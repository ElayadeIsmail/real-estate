import express from 'express';
import { citiesService } from '../services';

const router = express.Router();

router.get('/', citiesService.findAll);

export { router as citiesRouter };
