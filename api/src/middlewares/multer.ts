import multer from 'multer';
import { multerOptions } from '../utils';

export const upload = multer(multerOptions);
