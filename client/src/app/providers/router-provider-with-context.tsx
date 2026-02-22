import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "../router.gen";
import { authApi } from "@/features/auth";
import { useAuthStore } from "@/shared/store/auth-store";

const router = createRouter({
  routeTree,
  notFoundMode: "root",
  context: { user: null },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProviderWithContext = () => {
  const { user, login, logout } = useAuthStore();

  const { data, status } = useQuery({
    retry: false,
    queryKey: ["auth"],
    queryFn: authApi.auth,
  });

  useEffect(() => {
    switch (status) {
      case "success":
        login(data);
        break;
      case "error":
        logout();
        break;
    }
  }, [data, status]);

  useEffect(() => {
    router.invalidate();
  }, [user]);

  return <RouterProvider router={router} context={{ user }} />;
};
