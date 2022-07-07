import { ListingType } from '@prisma/client';

export enum ListingPricePeriod {
    Day = 'Day',
    Week = 'Week',
    Month = 'Month',
    Year = 'Year',
}

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

export interface ListingFindAllQueryArgs {
    limit: number;
    cursor: number;
}
