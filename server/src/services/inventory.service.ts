import { prisma } from "../config/prisma";
import { Inventory } from "../../prisma/generated/browser";
import { GetInventoryData } from "../schemas/get-inventory.schema";
import { User, Prisma } from "../../prisma/generated/client";
import { DATABASE_ERRORS } from "../consts/database-errors";
import { ApiError } from "../errors/api.error";

class InventoryService {
  public create = async (user: User): Promise<Inventory> => {
    const inventory = await prisma.inventory.create({
      data: { userId: user.id, name: "test" },
    });

    return inventory;
  };

  public getById = async (data: GetInventoryData): Promise<Inventory> => {
    try {
      const inventory = await prisma.inventory.findUniqueOrThrow({
        where: { id: data.inventoryId },
      });

      return inventory;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case DATABASE_ERRORS["NOT_FOUND"]:
            throw ApiError.NotFound("Inventory not found");
        }
      }

      throw error;
    }
  };

  public getOwned = async (user: User): Promise<Inventory[]> => {
    const inventory = await prisma.inventory.findMany({
      where: { userId: user.id },
    });

    return inventory;
  };
}

export const inventoryService = new InventoryService();
