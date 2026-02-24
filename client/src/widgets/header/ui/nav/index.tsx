import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";

import { NavItemWrapper } from "./item-wrapper";
import { type NavigationItem } from "../../model";
import type { User } from "@/entities/user";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/shadcn/components/ui/dropdown-menu";
import { useIsMobile } from "@/shared/shadcn/hooks/use-mobile";

interface Props {
  className?: string;
  user: User | null;
  navItems: NavigationItem[];
}

export const Nav = ({ className, user, navItems }: Props) => {
  const isMobile = useIsMobile();

  return (
    <nav className={className}>
      {!isMobile && (
        <ul className="flex gap-4">
          {navItems.map((navItem) => (
            <NavItemWrapper key={navItem.href} user={user} navItem={navItem}>
              <li className="text-muted-foreground hover:text-foreground">
                <Link
                  activeProps={{ className: "text-foreground" }}
                  to={navItem.href}
                >
                  {navItem.title}
                </Link>
              </li>
            </NavItemWrapper>
          ))}
        </ul>
      )}

      {isMobile && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuGroup>
              {navItems.map((navItem) => (
                <NavItemWrapper
                  key={navItem.href}
                  user={user}
                  navItem={navItem}
                >
                  <DropdownMenuItem asChild>
                    <Link to={navItem.href}>
                      {navItem.icon} {navItem.title}
                    </Link>
                  </DropdownMenuItem>
                </NavItemWrapper>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};
