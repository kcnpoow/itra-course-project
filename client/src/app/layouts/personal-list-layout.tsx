import { Link, Outlet } from "@tanstack/react-router";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/shared/shadcn/components/ui/tabs";

export const PersonalListLayout = () => {
  return (
    <>
      <Tabs className="mb-4">
        <TabsList>
          <TabsTrigger value="owned" asChild>
            <Link
              to="/personal/owned"
              activeProps={{
                className:
                  "bg-background dark:text-foreground dark:border-input dark:bg-input/30 text-foreground!",
              }}
            >
              My Inventories
            </Link>
          </TabsTrigger>

          <TabsTrigger value="shared" asChild>
            <Link
              to="/personal/shared"
              activeProps={{
                className:
                  "bg-background dark:text-foreground dark:border-input dark:bg-input/30 text-foreground!",
              }}
            >
              Shared Inventories
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Outlet />
    </>
  );
};
