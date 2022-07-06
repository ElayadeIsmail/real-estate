import { join } from 'path';

export const MAX_FILE_SIZE = 5000000;
export const UPLOAD_FILE_PATH = join(__dirname, '..', '..', 'public', 'upload');
export const TEMP_FILE_PATH = join(__dirname, '..', '..', 'temp');
export const DEFAULT_AVATAR = 'avatar-placeholder.jpg';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const TOKEN_EXPIRATION_TIME = 60 * 60 * 24 * 7; // 7 days
export const PAGINATION_DEFAULT_LIMIT = 30;
export const PAGINATION_MAX_LIMIT = 50;
