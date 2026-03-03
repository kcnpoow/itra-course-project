import { createFileRoute } from "@tanstack/react-router";

import { Shared } from "@/pages/personal";

export const Route = createFileRoute("/(main)/personal/_inventories/shared")({
  component: Shared,
});
