import { Role, User } from "../../prisma/generated/client";

export class UserDto {
  public readonly id: number;
  public readonly role: Role;
  public readonly isVerified: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.role = user.role;
    this.isVerified = user.isVerified;
  }
}
