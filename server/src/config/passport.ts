import passport from "passport";

import { localStrategy } from "../strategies/local.strategy";
import { googleStrategy } from "../strategies/google.strategy";
import { User } from "../../prisma/generated/client";
import { prisma } from "./prisma";

passport.use("local", localStrategy);
passport.use("google", googleStrategy);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
});

export { passport };
