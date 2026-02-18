import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../../prisma/generated/client";

const CONNECTION_STRING = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({
  connectionString: CONNECTION_STRING,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
