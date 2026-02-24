import { Link } from "@tanstack/react-router";

import { Nav } from "./nav";
import { UserDropdown } from "./user-dropdown";
import { navigationItems } from "../lib";
import { Search } from "@/features/search";
import { useAuthStore } from "@/shared/store/auth-store";
import { Button } from "@/shared/shadcn/components/ui/button";

export const Header = () => {
  const { user } = useAuthStore();

  return (
    <header className="border-b">
      <div className="container flex items-center gap-4 py-4">
        <Nav className="mr-auto" user={user} navItems={navigationItems} />

        <Search />

        {user ? (
          <UserDropdown user={user} />
        ) : (
          <Button className="p-0" variant="link" asChild>
            <Link to="/auth/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};
