import { citiesService } from '@services/index';
import express from 'express';

const router = express.Router();

router.get('/', citiesService.findAll);

export { router as citiesRouter };
