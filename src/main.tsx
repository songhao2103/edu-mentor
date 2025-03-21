import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/global.css";
import App from "./App.tsx";
import BackgroundLayout from "./components/layouts/BackgroundLayout.tsx";
import "./index.css";
import store from "./redux/store.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BackgroundLayout>
          <App />
        </BackgroundLayout>
      </QueryClientProvider>
    </StrictMode>
  </Provider>
);
