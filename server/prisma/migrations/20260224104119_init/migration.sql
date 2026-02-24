-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('INT', 'FLOAT', 'STRING', 'DATE', 'BOOLEAN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryField" (
    "id" SERIAL NOT NULL,
    "inventoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "dataType" "FieldType" NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "InventoryField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "inventoryId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemValue" (
    "itemId" INTEGER NOT NULL,
    "fieldId" INTEGER NOT NULL,
    "intValue" INTEGER,
    "floatValue" DOUBLE PRECISION,
    "stringValue" TEXT,
    "dateValue" TIMESTAMP(3),
    "boolValue" BOOLEAN,

    CONSTRAINT "ItemValue_pkey" PRIMARY KEY ("itemId","fieldId")
);

-- CreateIndex
CREATE UNIQUE INDEX "InventoryField_inventoryId_name_key" ON "InventoryField"("inventoryId", "name");

-- AddForeignKey
ALTER TABLE "InventoryField" ADD CONSTRAINT "InventoryField_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemValue" ADD CONSTRAINT "ItemValue_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemValue" ADD CONSTRAINT "ItemValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "InventoryField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
