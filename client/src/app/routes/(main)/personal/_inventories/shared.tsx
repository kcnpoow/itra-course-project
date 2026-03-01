import { Shared } from "@/pages/shared/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/personal/_inventories/shared")({
  component: Shared,
});
