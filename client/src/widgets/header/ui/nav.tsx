import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";

import type { NavigationItem } from "../model";
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
  navigationItems: NavigationItem[];
}

export const Nav = ({ className, navigationItems }: Props) => {
  const isMobile = useIsMobile();

  return (
    <nav className={className}>
      {!isMobile && (
        <ul>
          {navigationItems.map((navigationItem) => (
            <li
              className="text-muted-foreground hover:text-foreground"
              key={navigationItem.href}
            >
              <Link
                activeProps={{ className: "text-foreground" }}
                to={navigationItem.href}
              >
                {navigationItem.title}
              </Link>
            </li>
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
              {navigationItems.map((navigationItem) => (
                <DropdownMenuItem key={navigationItem.href} asChild>
                  <Link to={navigationItem.href}>
                    {navigationItem.icon} {navigationItem.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};
