import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pages/pageSlice";

export const store = configureStore({
	reducer: {
		pages: pageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
