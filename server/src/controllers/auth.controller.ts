import { NextFunction, Request, Response } from "express";

import { UserDto } from "../dto/user-dto";
import { ApiError } from "../errors/api.error";
import { User } from "../../prisma/generated/client";
import { authService } from "../services/auth.service";
import { SignupRequest } from "../types/signup-request";

class AuthController {
  public auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user as User;

      if (!user) {
        throw ApiError.Unauthorized();
      }

      const userDto = new UserDto(user);

      return res.status(200).json(userDto);
    } catch (error) {
      return next(error);
    }
  };

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body as SignupRequest;

      const user = await authService.signup(data);

      const userDto = new UserDto(user);

      return res.status(201).json(userDto);
    } catch (error) {
      return next(error);
    }
  };

  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.logout(() => {
        return res.sendStatus(200);
      });
    } catch (error) {
      return next(error);
    }
  };
}

export const authController = new AuthController();
