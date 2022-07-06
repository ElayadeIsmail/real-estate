import { ListingPricePeriod, ListingType } from '@prisma/client';

export interface CreateListingsInput {
    title: string;
    description: string;
    type: ListingType;
    price: {
        amount: number;
        period?: ListingPricePeriod;
    };
    zoneId: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    address: string;
}
