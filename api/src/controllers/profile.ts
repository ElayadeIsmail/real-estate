import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { rmdir } from 'fs/promises';
import { join } from 'path';
import { UPLOAD_FILE_PATH } from '../constants';
import { prisma } from '../prisma/prisma';
import { renameFile } from '../utils';

const get = async (req: Request, res: Response) => {
    const userId = req.currentUser!.id;
    const user = (await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
        },
    })) as User;
    res.send(user);
};

// update user avatar
const updateAvatar = async (req: Request, res: Response) => {
    const file = req.file!;
    const dist = join(UPLOAD_FILE_PATH, req.currentUser!.id.toString());
    await renameFile(file.filename, dist);
    res.send({ message: 'success' });
};

// update user phone
const update = async (req: Request, res: Response) => {
    const userId = req.currentUser!.id;
    const { phone } = req.body;
    const newUser = await prisma.user.update({
        where: { id: userId },
        data: { phone },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
        },
    });
    res.send(newUser);
};

const remove = async (req: Request, res: Response) => {
    const userId = req.currentUser!.id;
    await prisma.user.delete({ where: { id: userId } });
    await rmdir(join(UPLOAD_FILE_PATH, userId.toString()));
    res.status(204).send({});
};

export default { get, updateAvatar, update, remove };
