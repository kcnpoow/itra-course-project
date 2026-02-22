import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/globals.css";
import { RouterProviderWithContext } from "./providers/router-provider-with-context";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProviderWithContext />
    </QueryClientProvider>
  );
};
