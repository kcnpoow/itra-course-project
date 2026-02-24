import { Link, Outlet, useLocation } from "@tanstack/react-router";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/shared/shadcn/components/ui/tabs";

export const PersonalLayout = () => {
  const location = useLocation();

  const currentTab = location.pathname.split("/").pop();

  return (
    <>
      <Tabs className="mb-4" value={currentTab}>
        <TabsList>
          <TabsTrigger value="owned" asChild>
            <Link to="/personal/owned">My Inventories</Link>
          </TabsTrigger>

          <TabsTrigger value="shared" asChild>
            <Link to="/personal/shared">Shared Inventories</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Outlet />
    </>
  );
};
