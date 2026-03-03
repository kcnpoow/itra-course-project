import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/globals.css";
import { RouterProvider } from "./providers/router-provider";
import { TooltipProvider } from "@/shared/shadcn/components/ui/tooltip";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider />
      </QueryClientProvider>
    </TooltipProvider>
  );
};
