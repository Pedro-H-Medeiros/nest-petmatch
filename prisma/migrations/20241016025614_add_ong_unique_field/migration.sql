/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ongs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ongs_name_key" ON "ongs"("name");
