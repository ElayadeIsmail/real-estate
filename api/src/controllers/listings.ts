import { Request, Response } from 'express';
import { join } from 'path';
import { UPLOAD_FILE_PATH } from '../constants';
import { NotFoundError } from '../errors';
import { prisma } from '../prisma/prisma';
import { CreateListingsInput } from '../types/listings';
import { generateSlugFromTitle, renameFile } from '../utils';

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
                select: { period: true, value: true },
            },
            zone: {
                select: { name: true, city: { select: { name: true } } },
            },
        },
    });
    res.send(listings);
};

const findOne = async (req: Request, res: Response) => {
    // get slug from url
    const slug = req.params.slug;
    // find listing by slug
    const listing = await prisma.listing.findUnique({
        where: {
            slug,
        },
    });
    // if listing not found throw 404
    if (!listing) {
        throw new NotFoundError();
    }
    // send listing
    res.send(listing);
};

// Create a new listing
const create = async (
    req: Request<{}, {}, CreateListingsInput>,
    res: Response,
) => {
    // get data from request
    const body = req.body;
    const userId = req.currentUser!.id;
    const slug = await generateSlugFromTitle(body.title);
    const images: { url: string }[] = [];
    const dist = join(UPLOAD_FILE_PATH, userId.toString(), slug);
    for (const file of req.files as Express.Multer.File[]) {
        await renameFile(file.filename, dist);
        images.push({ url: `${userId}/${slug}/${file.filename}` });
    }
    // create listing
    const listing = await prisma.listing.create({
        data: {
            ...body,
            userId,
            slug,
            images: {
                createMany: {
                    data: images,
                },
            },
        },
        select: {
            id: true,
            slug: true,
        },
    });
    // send listing id
    res.send(listing);
};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default { findAll, findOne, create, update, remove };
