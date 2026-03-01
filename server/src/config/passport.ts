import passport from "passport";

import { prisma } from "./prisma";
import { User } from "../../prisma/generated/client";
import { localStrategy } from "../strategies/local.strategy";
import { googleStrategy } from "../strategies/google.strategy";

passport.use("local", localStrategy);
passport.use("google", googleStrategy);

passport.serializeUser((session: User, done) => {
  return done(null, { id: session.id, role: session.role });
});

passport.deserializeUser(async (session: User, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: session.id } });

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
});

export { passport };
