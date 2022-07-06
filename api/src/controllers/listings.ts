import { Request, Response } from 'express';
import { join } from 'path';
import { PAGINATION_MAX_LIMIT, UPLOAD_FILE_PATH } from '../constants';
import { NotAuthorizedError, NotFoundError } from '../errors';
import { prisma } from '../prisma/prisma';
import {
    CreateListingsInput,
    ListingFindAllQueryArgs,
} from '../types/listings';
import { generateSlugFromTitle, renameFile } from '../utils';

const findAll = async (req: Request, res: Response) => {
    const { limit, cursor } = req.query as unknown as ListingFindAllQueryArgs;
    const realLimit = Math.min(limit, PAGINATION_MAX_LIMIT);
    const limitPlusOne = realLimit + 1;
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
        cursor:
            cursor === 0
                ? undefined
                : {
                      id: cursor,
                  },
        skip: 1,
        take: limitPlusOne,
        orderBy: {
            id: 'desc',
        },
    });
    res.send({
        listings: listings.slice(0, realLimit),
        hasMore: listings.length === limitPlusOne,
    });
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
    res.status(201).send(listing);
};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const listing = await prisma.listing.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            userId: true,
        },
    });
    if (!listing) {
        throw new NotFoundError();
    }
    if (listing.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
    }
    await prisma.listing.delete({
        where: { id },
    });
    res.status(204).send(listing);
};

export default { findAll, findOne, create, update, remove };
