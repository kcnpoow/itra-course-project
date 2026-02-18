import { NextFunction, Request, Response } from "express";

import { SignupRequest } from "../types/signup-request";
import { authService } from "../services/auth.service";

class AuthController {
  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body as SignupRequest;

      const user = await authService.signup(data);

      return res.status(201).json(user);
    } catch (error) {
      return next(error);
    }
  };

  public signin = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      return next(error);
    }
  };
}

export const authController = new AuthController();
