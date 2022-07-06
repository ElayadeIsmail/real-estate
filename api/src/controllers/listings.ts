import { Request, Response } from 'express';
import { NotFoundError } from '../errors';
import { prisma } from '../prisma/prisma';

const findAll = async (req: Request, res: Response) => {
    const listings = await prisma.listing.findMany({
        include: {
            images: {
                select: {
                    url: true,
                },
            },
            user: {
                select: {
                    avatar: true,
                    firstName: true,
                    lastName: true,
                },
            },
            price: {
                select: { period: true, price: true },
            },
            zone: {
                select: { name: true, city: { select: { name: true } } },
            },
        },
    });
    res.send(listings);
};

const findOne = async (req: Request, res: Response) => {
    const slug = req.params.slug;
    const listing = await prisma.listing.findUnique({
        where: {
            slug,
        },
    });
    if (!listing) {
        throw new NotFoundError();
    }
    res.send(listing);
};

const create = async (req: Request, res: Response) => {};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default { findAll, findOne, create, update, remove };
