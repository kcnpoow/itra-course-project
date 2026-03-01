import { createFileRoute } from "@tanstack/react-router";

import { AuthLayout } from "@/app/layouts/auth-layout";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
  beforeLoad: ({ context }) => {
    const { user } = context;

    if (user) {
      throw Route.redirect({ to: "/", replace: true });
    }
  },
});
