/*
  Warnings:

  - Added the required column `ImageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gitHubRepoName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gitUserName` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "ImageUrl" TEXT NOT NULL,
ADD COLUMN     "gitHubRepoName" TEXT NOT NULL,
ADD COLUMN     "gitUserName" TEXT NOT NULL;
