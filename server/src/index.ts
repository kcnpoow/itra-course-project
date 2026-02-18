import "dotenv/config";
import express from "express";

import { passport } from "./config/passport";
import { authRouter } from "./routers/auth.router";
import { prisma } from "./config/prisma";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use("/auth", authRouter);

app.listen(PORT, async (error) => {
  if (error) {
    console.error("Error while starting server");
  } else {
    console.info(`Server running on http://localhost:${PORT}`);
  }
});
