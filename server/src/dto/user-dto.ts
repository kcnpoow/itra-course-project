import { User } from "../../prisma/generated/client";

export class UserDto {
  public readonly id: number;
  public readonly isVerified: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.isVerified = user.isVerified;
  }
}
