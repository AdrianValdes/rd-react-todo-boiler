import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Task } from "./types";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.unshift(action.payload);
		},
		toggleTask: (state, action: PayloadAction<string>) => {
			const task = state.find((task) => task.id === action.payload);
			if (task) task.completed = !task.completed;
		},
	},
});
export const { addTask, toggleTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks;
export default tasksSlice.reducer;
