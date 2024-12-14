/*
  Warnings:

  - You are about to drop the column `color` on the `pets` table. All the data in the column will be lost.
  - Added the required column `type` to the `pets` table without a default value. This is not possible if the table is not empty.

*/

-- DropForeignKey
ALTER TABLE "adoptions" DROP CONSTRAINT "adoptions_pet_id_fkey";

-- DropForeignKey
ALTER TABLE "adoptions" DROP CONSTRAINT "adoptions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_ong_id_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "color",
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
