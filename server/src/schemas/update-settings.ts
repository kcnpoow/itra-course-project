import { z } from "zod";
import { ValidatedRequest } from "express-zod-safe";

export const updateSettingsChema = {
  params: z.object({
    inventoryId: z.coerce.number(),
  }),
  body: z.object({
    name: z.string(),
    description: z.string(),
  }),
};

export type UpdateSettingsRequest = ValidatedRequest<
  typeof updateSettingsChema
>;

export type UpdateSettingsData = z.infer<
  typeof updateSettingsChema.params & typeof updateSettingsChema.body
>;
