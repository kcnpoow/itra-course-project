import express from "express";
import session from "express-session";
import cors from "cors";

import { env } from "./lib/env";
import { passport } from "./config/passport";
import { authRouter } from "./routers/auth.router";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
app.use(errorMiddleware);

app.listen(env.PORT, async (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Server running on http://localhost:${env.PORT}`);
  }
});
