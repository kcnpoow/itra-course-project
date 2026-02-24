import { Router } from "express";

import { passport } from "../config/passport";
import { signupSchema } from "../schemas/signup.schema";
import { authController } from "../controllers/auth.controller";
import { validationMiddleware } from "../middlewares/validation.middlware";
import { env } from "../lib/env";

const authRouter = Router();

authRouter.get("/", authController.auth);

authRouter.post(
  "/signup",
  validationMiddleware(signupSchema),
  authController.signup,
);

// Local authentication
authRouter.post("/signin", passport.authenticate("local"));

// Google authentication
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${env.CLIENT_URL}`,
    failureRedirect: `${env.CLIENT_URL}/auth/signin`,
  }),
);

authRouter.post("/logout", authController.logout);

export { authRouter };
