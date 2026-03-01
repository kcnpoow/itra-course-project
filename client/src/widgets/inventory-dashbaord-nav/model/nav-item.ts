import { type LinkOptions } from "@tanstack/react-router";

export interface NavItem {
  title: string;
  href: LinkOptions["to"];
}
