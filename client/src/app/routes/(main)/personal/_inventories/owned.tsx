import { createFileRoute } from "@tanstack/react-router";

import { Owned } from "@/pages/owned";

export const Route = createFileRoute("/(main)/personal/_inventories/owned")({
  component: Owned,
});
