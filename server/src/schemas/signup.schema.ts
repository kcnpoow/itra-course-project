import { z } from "zod";

import { RequestSchema } from "../types/request-schema";

export const signupSchema: RequestSchema = {
  body: z
    .object({
      email: z.email(),
      password: z.string().min(6),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword),
};
