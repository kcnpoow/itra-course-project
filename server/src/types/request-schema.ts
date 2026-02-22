import { ZodObject, ZodAny } from "zod";

export interface RequestSchema {
  body?: ZodObject;
  query?: ZodAny;
  params?: ZodAny;
}
