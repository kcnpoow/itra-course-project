import { createFileRoute } from "@tanstack/react-router";

import { PersonalListLayout } from "@/app/layouts/personal-list-layout";

export const Route = createFileRoute("/(main)/personal/_inventories")({
  component: PersonalListLayout,
});
