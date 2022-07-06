/*
  Warnings:

  - You are about to drop the column `descripton` on the `listings` table. All the data in the column will be lost.
  - You are about to drop the column `listing_price_id` on the `listings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[listing_id]` on the table `listing_prices` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `listing_id` to the `listing_prices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "listings" DROP CONSTRAINT "listings_listing_price_id_fkey";

-- DropIndex
DROP INDEX "listings_listing_price_id_key";

-- AlterTable
ALTER TABLE "listing_prices" ADD COLUMN     "listing_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "listings" DROP COLUMN "descripton",
DROP COLUMN "listing_price_id",
ADD COLUMN     "description" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "listing_prices_listing_id_key" ON "listing_prices"("listing_id");

-- AddForeignKey
ALTER TABLE "listing_prices" ADD CONSTRAINT "listing_prices_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
