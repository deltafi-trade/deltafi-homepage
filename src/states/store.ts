import { configureStore } from "@reduxjs/toolkit";
import { poolStateReducer } from "./poolState";

export const store = configureStore({
  reducer: {
    poolState: poolStateReducer,
  },
});

export const poolStateSelector = (state: RootState) => state.poolState.pools;

export type RootState = ReturnType<typeof store.getState>;
