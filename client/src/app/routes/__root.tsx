import type { User } from "@/entities/user";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

interface RouteContext {
  user: User | null;
}

const RootComponent = () => {
  return <Outlet />;
};

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
});
