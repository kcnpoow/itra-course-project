import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/personal/$inventoryId/")({
  beforeLoad: () => {
    throw Route.redirect({ to: "/personal/$inventoryId/items", replace: true });
  },
});
