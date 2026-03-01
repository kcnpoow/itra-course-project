import { NextFunction, Request, Response } from "express";

import { inventoryService } from "../services/inventory.service";
import { GetInventoryRequest } from "../schemas/get-inventory.schema";
import { User } from "../../prisma/generated/client";

class InventoryController {
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inventory = await inventoryService.create(req.user as User);

      return res.status(201).json(inventory);
    } catch (error) {
      return next(error);
    }
  };

  public getById = async (
    req: GetInventoryRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const inventory = await inventoryService.getById(req.params);

      return res.status(200).json(inventory);
    } catch (error) {
      return next(error);
    }
  };

  public getOwned = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inventory = await inventoryService.getOwned(req.user as User);

      return res.status(200).json(inventory);
    } catch (error) {
      return next(error);
    }
  };
}

export const inventoryController = new InventoryController();
