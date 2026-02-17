import {
  Strategy,
  ExtractJwt,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";

import { prisma } from "../config/prisma";

const options: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
  issuer: "example.com",
  audience: "project.com",
};

export const jwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    const id = Number(payload.id);

    if (typeof payload.id !== "number") {
      return done(null, null);
    }

    const user = await prisma.user.findUnique({ where: { id } });

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});
