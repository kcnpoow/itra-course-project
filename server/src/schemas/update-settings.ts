import { z } from "zod";
import { ValidatedRequest } from "express-zod-safe";

export const updateSettingsSchema = {
  params: z.object({
    inventoryId: z.coerce.number(),
  }),
  body: z.object({
    name: z.string(),
    description: z.string(),
  }),
};

export type UpdateSettingsRequest = ValidatedRequest<
  typeof updateSettingsSchema
>;

export type UpdateSettingsData = z.infer<typeof updateSettingsSchema.body>;
