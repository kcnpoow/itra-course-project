import type { UserRole } from "./user-role";

export interface User {
  id: number;
  role: UserRole;
}
