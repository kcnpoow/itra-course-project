import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/globals.css";
import { RouterProvider } from "./providers/router-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
    </QueryClientProvider>
  );
};
