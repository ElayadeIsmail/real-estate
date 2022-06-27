import { Request, Response } from 'express';
import { UPLOAD_FILE_PATH } from '../constants';
import { renameFile } from '../utils';
import {join } from "path"

const get = (req: Request, res: Response) => {
    console.log(__dirname);
    res.send({});
};

const updateAvatar = async (req: Request, res: Response) => {
    const file = req.file!;
    const dist = join(
        UPLOAD_FILE_PATH,
        req.currentUser!.id.toString(),
    );
    await renameFile(file.filename, dist);
    res.send({ message: 'success' });
};

const update = (req: Request, res: Response) => {
    res.send({});
};

export default { get, updateAvatar, update };
