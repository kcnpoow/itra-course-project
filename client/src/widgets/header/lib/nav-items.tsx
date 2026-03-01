import { HomeIcon, PackageIcon } from "lucide-react";
import type { NavItem } from "../model";

export const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: <HomeIcon /> },
  {
    title: "Personal",
    href: "/personal",
    icon: <PackageIcon />,
    roles: ["USER"],
  },
];
