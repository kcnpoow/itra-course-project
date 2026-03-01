import { Outlet } from "@tanstack/react-router";

import { InventoryDashboardNav } from "@/widgets/inventory-dashbaord-nav/ui";

export const InventoryDashbaordLayout = () => {
  return (
    <div className="grid gap-4 md:grid-cols-[auto_1fr]">
      <div>
        <InventoryDashboardNav />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
