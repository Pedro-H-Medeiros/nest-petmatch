-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'ONG_ADMIN';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "ong_id" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
