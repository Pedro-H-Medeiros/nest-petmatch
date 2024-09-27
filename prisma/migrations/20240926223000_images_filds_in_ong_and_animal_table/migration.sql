/*
  Warnings:

  - You are about to drop the column `image_url` on the `animals` table. All the data in the column will be lost.
  - Added the required column `image_user` to the `ongs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" DROP COLUMN "image_url",
ADD COLUMN     "image_urls" TEXT[];

-- AlterTable
ALTER TABLE "ongs" ADD COLUMN     "image_urls" TEXT[],
ADD COLUMN     "image_user" TEXT NOT NULL;
