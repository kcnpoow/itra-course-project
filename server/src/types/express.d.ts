import { User as PrismaUser } from "../../prisma/generated/client";

declare global {
  namespace Express {
    interface User extends PrismaUser {}
  }
}
