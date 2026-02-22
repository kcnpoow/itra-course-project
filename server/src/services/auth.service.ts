import bcrypt from "bcrypt";

import { env } from "../lib/env";
import { Prisma, User } from "../../prisma/generated/client";
import { prisma } from "../config/prisma";
import { SignupRequest } from "../types/signup-request";
import { ApiError } from "../errors/api.error";
import { DATABASE_ERRORS } from "../consts/database-errors";

class AuthService {
  public signup = async (data: SignupRequest): Promise<User> => {
    try {
      const { email, password } = data;

      const hashedPassword = await bcrypt.hash(password, env.SALT);

      const user = await prisma.user.create({
        data: { email, password: hashedPassword },
      });

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case DATABASE_ERRORS["UNIQUE_VIOLATION"]:
            throw ApiError.Conflict("User with this email already exists");
        }
      }

      throw error;
    }
  };
}

export const authService = new AuthService();
