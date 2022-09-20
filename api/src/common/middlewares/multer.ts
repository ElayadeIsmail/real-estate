import { multerOptions } from '@common/utils';
import multer from 'multer';

export const upload = multer(multerOptions);
