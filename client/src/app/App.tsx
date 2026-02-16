import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./router.gen";
import "./styles/globals.css";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return <RouterProvider router={router} />;
};
