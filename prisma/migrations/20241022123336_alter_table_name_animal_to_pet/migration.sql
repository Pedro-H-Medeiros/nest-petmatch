/*
  Warnings:

  - You are about to drop the column `animal_id` on the `adoptions` table. All the data in the column will be lost.
  - You are about to drop the `animals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pet_id` to the `adoptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "adoptions" DROP CONSTRAINT "adoptions_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_ong_id_fkey";

-- AlterTable
ALTER TABLE "adoptions" DROP COLUMN "animal_id",
ADD COLUMN     "pet_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "animals";

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "ong_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TIMESTAMP(3) NOT NULL,
    "sex" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "adoption_status" "AdoptionStatus" NOT NULL DEFAULT 'AVAILABLE',
    "image_urls" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
