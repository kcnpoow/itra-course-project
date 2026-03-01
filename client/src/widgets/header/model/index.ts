import type { ReactNode } from "react";
import { type LinkOptions } from "@tanstack/react-router";

import type { UserRole } from "@/entities/user";

export interface NavItem {
  title: string;
  href: LinkOptions["to"];
  icon: ReactNode;
  roles?: UserRole[];
}
