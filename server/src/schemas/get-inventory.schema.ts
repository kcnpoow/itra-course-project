import { z } from "zod";
import { ValidatedRequest } from "express-zod-safe";

export const getInventorySchema = {
  params: z.object({
    inventoryId: z.coerce.number(),
  }),
};

export type GetInventoryRequest = ValidatedRequest<typeof getInventorySchema>;

export type GetInventoryData = z.infer<typeof getInventorySchema.params>;
