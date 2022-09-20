import { TEMP_FILE_PATH } from '@common/constants';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { rename } from 'fs/promises';
import { join } from 'path';

// function for renaming a file
export const renameFile = async (fileName: string, newPath: string) => {
    const oldPath = join(TEMP_FILE_PATH, fileName);
    try {
        if (!existsSync(newPath)) {
            mkdirSync(newPath, { recursive: true });
        }
        await rename(oldPath, join(newPath, fileName));
    } catch (err) {
        unlinkSync(oldPath);
        console.log(err);
        throw new Error(err);
    }
};
