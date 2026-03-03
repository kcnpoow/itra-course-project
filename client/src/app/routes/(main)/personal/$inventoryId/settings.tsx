import { createFileRoute } from "@tanstack/react-router";

import { Settings } from "@/pages/inventory-dashboard";

export const Route = createFileRoute("/(main)/personal/$inventoryId/settings")({
  component: Settings,
});
