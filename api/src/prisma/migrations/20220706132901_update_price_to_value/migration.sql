/*
  Warnings:

  - You are about to drop the column `price` on the `listing_prices` table. All the data in the column will be lost.
  - Added the required column `value` to the `listing_prices` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `listings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "listing_prices" DROP COLUMN "price",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "listings" ALTER COLUMN "description" SET NOT NULL;
