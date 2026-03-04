import { Router } from "express";
import validate from "express-zod-safe";

import { inventoryController } from "../controllers/inventory.controller";
import { getInventorySchema } from "../schemas/get-inventory.schema";
import { updateSettingsSchema } from "../schemas/update-settings";

const inventoryRouter = Router();

inventoryRouter.get("/owned", inventoryController.getOwned);
inventoryRouter.get(
  "/:inventoryId",
  validate(getInventorySchema),
  inventoryController.getById,
);
inventoryRouter.post("/", inventoryController.create);

inventoryRouter.patch(
  "/:inventoryId/update-settings",
  validate(updateSettingsSchema),
  inventoryController.updateSettings,
);

export { inventoryRouter };
