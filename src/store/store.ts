import { configureStore } from "@reduxjs/toolkit";
import configReducer from "@/lib/features/config/configSlice";
import breadcrumbsReducer from "./breadcrumbsSlice"; // Adjust path as necessary

export const makeStore = () => {
  return configureStore({
    reducer: {
      config: configReducer,
      breadcrumbs: breadcrumbsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];