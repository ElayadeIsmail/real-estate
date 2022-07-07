/*
  Warnings:

  - You are about to drop the `listing_prices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `listings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "listing_images" DROP CONSTRAINT "listing_images_listing_id_fkey";

-- DropForeignKey
ALTER TABLE "listing_prices" DROP CONSTRAINT "listing_prices_listing_id_fkey";

-- DropForeignKey
ALTER TABLE "listings" DROP CONSTRAINT "listings_user_id_fkey";

-- AlterTable
ALTER TABLE "listings" ADD COLUMN     "price" JSONB NOT NULL;

-- DropTable
DROP TABLE "listing_prices";

-- AddForeignKey
ALTER TABLE "listing_images" ADD CONSTRAINT "listing_images_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
