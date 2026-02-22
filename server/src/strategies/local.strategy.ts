import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";

import { prisma } from "../config/prisma";

export const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email: string, password: string, done) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return done(null, false);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return done(null, false);
    }

    // if (!user.isVerified) {
    //   return done(null, false);
    // }

    return done(null, user);
  },
);
