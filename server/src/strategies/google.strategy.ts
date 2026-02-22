import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "../config/prisma";
import { env } from "../lib/env";

export const googleStrategy = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile._json.email;

      if (!email) {
        return done(null, false);
      }

      const user = await prisma.user.upsert({
        where: { email },
        update: { isVerified: true },
        create: { email, isVerified: true },
      });

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  },
);
