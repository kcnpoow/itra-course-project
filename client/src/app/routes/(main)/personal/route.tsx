import { createFileRoute, redirect } from "@tanstack/react-router";

import { PersonalLayout } from "@/app/layouts/personal-layout";

export const Route = createFileRoute("/(main)/personal")({
  component: PersonalLayout,
  beforeLoad: ({ context }) => {
    const { user } = context;

    if (!user) {
      throw redirect({ to: "/", replace: true });
    }
  },
});
