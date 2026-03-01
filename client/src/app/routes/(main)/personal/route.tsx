import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/personal")({
  component: Outlet,
  beforeLoad: ({ context }) => {
    const { user } = context;

    if (!user) {
      throw Route.redirect({ to: "/", replace: true });
    }
  },
});
