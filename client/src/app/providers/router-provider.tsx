import { useEffect } from "react";
import {
  createRouter,
  RouterProvider as TanstackRouterProvider,
} from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { routeTree } from "../router.gen";
import { authApi } from "@/features/auth";
import { useAuthStore } from "@/shared/store/auth-store";
import { Spinner } from "@/shared/shadcn/components/ui/spinner";

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

export const RouterProvider = () => {
  const { user, login, logout } = useAuthStore();

  const fetchUser = async () => {
    try {
      const user = await authApi.auth();

      login(user);

      return user;
    } catch {
      logout();

      return null;
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: fetchUser,
    retry: false,
  });

  useEffect(() => {
    if (!user && !isLoading) {
      router.invalidate();
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-svw h-svh">
        <Spinner className="size-16 text-primary" />
      </div>
    );
  }

  return <TanstackRouterProvider router={router} context={{ user }} />;
};
