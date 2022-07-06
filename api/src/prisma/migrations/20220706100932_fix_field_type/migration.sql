/*
  Warnings:

  - You are about to drop the column `peroid` on the `listing_prices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "listing_prices" DROP COLUMN "peroid",
ADD COLUMN     "period" "ListingPricePeriod";
