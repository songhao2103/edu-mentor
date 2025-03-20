import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/global.css";
import "./index.css";
import App from "./App.tsx";
import store from "./redux/store.ts";
import BackgroundLayout from "./components/layouts/BackgroundLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BackgroundLayout>
        <App />
      </BackgroundLayout>
    </StrictMode>
  </Provider>
);
