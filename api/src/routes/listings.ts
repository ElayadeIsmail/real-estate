import { ListingType } from '@prisma/client';
import express from 'express';
import { check, param, query } from 'express-validator';
import { PAGINATION_DEFAULT_LIMIT } from '../common/constants';
import { requireAuth, upload, validateRequest } from '../common/middlewares';
import { ListingPricePeriod } from '../common/types/listings';
import { prisma } from '../prisma/prisma';
import { listingsService } from '../services';

// Create a new express Router
const router = express.Router();

// Endpoint: /api/listings
// Method: POST
// Description: Create a new listing
router.post(
    '/',
    requireAuth,
    upload.array('images', 5),
    [
        check('title').notEmpty().withMessage('You must supply a title'),
        check('description')
            .isJSON()
            .withMessage('You must supply a valid description'),
        check('type')
            .isIn([ListingType.Rent, ListingType.Sale])
            .withMessage('You must supply a valid type'),
        check('zoneId')
            .toInt()
            .isInt({
                min: 1,
            })
            .withMessage('You must supply a valid zoneId')
            .custom(async (zoneId: number) => {
                const zone = await prisma.zone.findUnique({
                    where: {
                        id: zoneId,
                    },
                });
                if (!zone) {
                    throw new Error('Zone does not exist');
                }
            }),
        check('bedrooms')
            .notEmpty()
            .toInt()
            .isInt({
                min: 0,
            })
            .withMessage('You must supply a valid bedrooms'),
        check('bathrooms')
            .notEmpty()
            .toInt()
            .isInt({
                min: 0,
            })
            .withMessage('You must supply a valid bedrooms'),
        check('area')
            .notEmpty()
            .toFloat()
            .isFloat({
                min: 0,
            })
            .withMessage('You must supply a valid area'),
        check('address').notEmpty().withMessage('You must supply an address'),
        check('price.amount')
            .notEmpty()
            .toFloat()
            .isFloat({
                min: 0,
            })
            .withMessage('You must supply a valid price'),
        check('price.period').custom((value, { req }) => {
            if (req.body.type === ListingType.Sale) {
                return true;
            }
            if (
                [
                    ListingPricePeriod.Day,
                    ListingPricePeriod.Week,
                    ListingPricePeriod.Month,
                    ListingPricePeriod.Year,
                ].includes(value)
            ) {
                return true;
            }
            throw new Error('You must supply a valid price period');
        }),
        check('images').custom(async (_, { req }) => {
            if (req.files.length > 0) {
                return true;
            }
            throw new Error('You must supply at least one image');
        }),
    ],
    validateRequest,
    listingsService.create,
);

router.get(
    '/:slug',
    param('slug').exists().isSlug().withMessage('Slug must be a valid slug'),
    validateRequest,
    listingsService.findOne,
);

router.get(
    '/',
    [
        query('limit')
            .default(PAGINATION_DEFAULT_LIMIT)
            .toInt()
            .isInt()
            .withMessage('Limit must be a number'),
        query('cursor')
            .default(0)
            .toInt()
            .isInt({
                min: 0,
            })
            .withMessage('Cursor must be a valid integer'),
    ],
    validateRequest,
    listingsService.findAll,
);

router.put(
    '/:id',
    requireAuth,
    param('id').exists().toInt(),
    validateRequest,
    listingsService.update,
);

router.delete(
    '/:id',
    requireAuth,
    param('id').exists().toInt(),
    validateRequest,
    listingsService.remove,
);

export { router as listingsRouter };
