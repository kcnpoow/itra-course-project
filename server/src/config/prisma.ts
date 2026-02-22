import { PrismaPg } from "@prisma/adapter-pg";

import { env } from "../lib/env";
import { PrismaClient } from "../../prisma/generated/client";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
