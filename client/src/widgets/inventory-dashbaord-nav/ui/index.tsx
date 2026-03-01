import { Link } from "@tanstack/react-router";

import { navItems } from "../lib/nav-items";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/shared/shadcn/components/ui/tabs";
import { useIsMobile } from "@/shared/shadcn/hooks/use-mobile";

export const InventoryDashboardNav = () => {
  const isMobile = useIsMobile();

  return (
    <Tabs orientation={isMobile ? "horizontal" : "vertical"}>
      <TabsList className="max-md:flex-wrap max-md:justify-start max-md:h-auto! md:min-w-32">
        {navItems.map((navItem) => (
          <TabsTrigger key={navItem.title} value={navItem.title} asChild>
            <Link
              className="max-md:flex-none"
              to={navItem.href}
              activeProps={{
                className:
                  "bg-background dark:text-foreground dark:border-input dark:bg-input/30 text-foreground!",
              }}
            >
              {navItem.title}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
