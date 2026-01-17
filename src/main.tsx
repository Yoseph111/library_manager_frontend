// src/main.tsx (or src/main.ts)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { setupApiInterceptors } from "./service/api";
import App from "./App";

setupApiInterceptors(() => store.getState());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);