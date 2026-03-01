import { z } from "zod";
import { ValidatedRequest } from "express-zod-safe";

export const signupSchema = {
  body: z
    .object({
      email: z.email(),
      password: z.string().min(6),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword),
};

export type SignupRequest = ValidatedRequest<typeof signupSchema>;

export type SignupData = z.infer<typeof signupSchema.body>;
