import { createFileRoute } from "@tanstack/react-router";

import { InventoryDashbaordLayout } from "@/app/layouts/inventory-dashboard-layout";
import { inventoryApi } from "@/entities/inventory";

export const Route = createFileRoute("/(main)/personal/$inventoryId")({
  component: InventoryDashbaordLayout,
  loader: async ({ params }) => {
    const inventoryId = Number(params.inventoryId);

    const inventory = await inventoryApi.get({
      inventoryId,
    });

    return { inventory };
  },
});
