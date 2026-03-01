import { Router } from "express";
import validate from "express-zod-safe";

import { passport } from "../config/passport";
import { signupSchema } from "../schemas/signup.schema";
import { authController } from "../controllers/auth.controller";
import { UserDto } from "../dto/user-dto";

const authRouter = Router();

authRouter.get("/", authController.auth);

authRouter.post("/signup", validate(signupSchema), authController.signup);

// Local authentication
authRouter.post("/signin", passport.authenticate("local"), (req, res) => {
  const user = req.user;

  if (user) {
    const userDto = new UserDto(user);

    return res.status(200).json(userDto);
  }
});

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
  passport.authenticate("google"),
  (req, res) => {
    const user = req.user;

    if (user) {
      const userDto = new UserDto(user);

      return res.status(200).send(`
        <script>
          window.opener.postMessage(
            { 
              type: "google-auth-success",
              user: ${JSON.stringify(userDto)} 
            },
            "*"
          );
          
          window.close();
        </script>
      `);
    }
  },
);

authRouter.post("/logout", authController.logout);

export { authRouter };
