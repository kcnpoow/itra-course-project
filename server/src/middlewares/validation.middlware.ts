import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

import { ApiError } from "../errors/api.error";
import { RequestSchema } from "../types/request-schema";

export const validationMiddleware = ({
  body,
  query,
  params,
}: RequestSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (body) {
        req.body = body.parse(req.body);
      }

      if (query) {
        req.query = query.parse(req.query);
      }

      if (params) {
        req.params = params.parse(req.params);
      }

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(ApiError.BadRequest());
      }

      return next(error);
    }
  };
};
