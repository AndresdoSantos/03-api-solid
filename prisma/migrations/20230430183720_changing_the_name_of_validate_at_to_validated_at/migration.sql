/*
  Warnings:

  - You are about to drop the column `validateAt` on the `checkIns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "checkIns" DROP COLUMN "validateAt",
ADD COLUMN     "validatedAt" TIMESTAMP(3);
