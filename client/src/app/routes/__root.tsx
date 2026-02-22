import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import type { User } from "@/entities/user";

interface RouterContext {
  user: User | null;
}

const RootComponent = () => {
  return <Outlet />;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
