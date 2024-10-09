import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.unshift(action.payload);
		},
	},
});
export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
