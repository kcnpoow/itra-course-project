import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/app/layouts/main-layout";

export const Route = createFileRoute("/(main)")({
  component: MainLayout,
});
