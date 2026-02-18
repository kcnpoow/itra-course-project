import { Router } from "express";

import { passport } from "../config/passport";
import { authController } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.get("/", passport.authenticate("jwt", { session: false }));
authRouter.post("/signup", authController.signup);

export { authRouter };
