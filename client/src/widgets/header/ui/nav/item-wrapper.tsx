import type { ReactNode } from "react";

import type { NavigationItem } from "../../model";
import type { User } from "@/entities/user";

interface Props {
  children: ReactNode;
  user: User | null;
  navItem: NavigationItem;
}

export const NavItemWrapper = ({ children, user, navItem }: Props) => {
  if (navItem.roles) {
    if (!user) {
      return null;
    }

    if (!navItem.roles.includes(user.role)) {
      return null;
    }
  }

  return children;
};
