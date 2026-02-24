import { HomeIcon, PackageIcon } from "lucide-react";
import type { NavigationItem } from "../model";

export const navigationItems: NavigationItem[] = [
  { title: "Home", href: "/", icon: <HomeIcon /> },
  {
    title: "Personal",
    href: "/personal",
    icon: <PackageIcon />,
    roles: ["USER"],
  },
];
