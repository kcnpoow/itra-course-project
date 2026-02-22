import { createFileRoute, redirect } from "@tanstack/react-router";

import { Auth } from "@/app/layouts/auth";

export const Route = createFileRoute("/auth")({
  component: Auth,
  beforeLoad: ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/", replace: true });
    }
  },
});
