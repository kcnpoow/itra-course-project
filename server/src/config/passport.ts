import passport from "passport";

import { jwtStrategy } from "../strategies/jwt.strategy";

passport.use("jwt", jwtStrategy);

export { passport };
