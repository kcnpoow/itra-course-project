import { createFileRoute } from "@tanstack/react-router";

import { Main } from "@/app/layouts/main";

export const Route = createFileRoute("/(main)")({
  component: Main,
});
