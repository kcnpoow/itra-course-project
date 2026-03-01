import type { NavItem } from "../model/nav-item";

export const navItems: NavItem[] = [
  {
    title: "Items",
    href: "/personal/$inventoryId/items",
  },
  {
    title: "Chat",
    href: "/personal/$inventoryId/discussion",
  },
  {
    title: "Settings",
    href: "/personal/$inventoryId/general-settings",
  },
  {
    title: "Custom ID",
    href: "/personal/$inventoryId/inventory-numbers",
  },
  {
    title: "Fields",
    href: "/personal/$inventoryId/fields",
  },
  {
    title: "Access",
    href: "/personal/$inventoryId/access-settings",
  },
  {
    title: "Stats",
    href: "/personal/$inventoryId/statistics",
  },
];
