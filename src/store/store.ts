import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasks from "../features/tasks/tasksSlice";

const rootReducer = combineReducers({
	tasks,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
