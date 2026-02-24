import { createFileRoute, redirect } from "@tanstack/react-router";

import { AuthLayout } from "@/app/layouts/auth-layout";
import { useAuthStore } from "@/shared/store/auth-store";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
  beforeLoad: () => {
    const { user } = useAuthStore.getState();

    if (user) {
      throw redirect({ to: "/", replace: true });
    }
  },
});
