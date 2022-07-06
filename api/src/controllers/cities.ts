import { Request, Response } from 'express';
import { prisma } from '../prisma/prisma';

const findAll = async (_: Request, res: Response) => {
    const cities = await prisma.city.findMany({
        include: {
            zones: true,
        },
    });
    res.send(cities);
};

export default { findAll };
