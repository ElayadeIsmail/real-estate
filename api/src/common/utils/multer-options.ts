import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuid } from 'uuid';
import { MAX_FILE_SIZE } from '../constants';
import { BadRequestError } from '../errors';

// Multer upload options
export const multerOptions = {
    // Enable file size limits
    limits: {
        fileSize: MAX_FILE_SIZE,
    },
    // Check the mimetypes to allow for upload
    fileFilter: (req, file, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            // Allow storage of file
            cb(null, true);
        } else {
            // Reject file
            cb(
                new BadRequestError(
                    `Unsupported file type ${extname(file.originalname)}`,
                ),
                false,
            );
        }
    },
    // Storage properties
    storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = join(process.cwd(), 'temp');
            // Create folder if doesn't exist
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        // File modification details
        filename: (req: any, file: any, cb: any) => {
            // Calling the callback passing the random name generated with the original extension name
            cb(null, `${uuid()}${extname(file.originalname)}`);
        },
    }),
};
