import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./slices";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducers,
    preloadedState,
  });
  // handle hot reloading
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./slices", () => store.replaceReducer(rootReducers));
  }
  return store;
}
