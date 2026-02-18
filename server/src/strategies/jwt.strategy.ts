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
    const { id } = payload;

    if (!id) {
      return done(null, false);
    }

    const user = await prisma.user.findUnique({ where: { id: payload.id } });

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});
