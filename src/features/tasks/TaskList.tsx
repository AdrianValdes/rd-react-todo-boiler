import { Button, List, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TaskItem } from "./TaskItem";
import { addTask } from "./tasksSlice";

/**
 * Renders a task list.
 *
 * @returns A task list
 */
export const TaskList = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [taskText, setTaskText] = useState("");
	const tasks = useSelector((state: RootState) => state.tasks);

	const handleAddTask = () => {
		if (taskText.trim()) {
			const task = { id: nanoid(), text: taskText.trim(), completed: false };
			dispatch(addTask(task));
			setTaskText("");
		}
	};

	return (
		<Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
			<Typography variant="h3" gutterBottom>
				{t("taskList.title")}
			</Typography>
			<Box>
				<Typography mb="8px" variant="h6">
					{t("taskList.addTask")}
				</Typography>
				<TextField
					fullWidth
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleAddTask();
					}}
					placeholder={t("taskList.task") || "Aufgabe"}
					variant="outlined"
					size="small"
				/>
				<Box
					sx={{
						mt: 4,
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<Button
						disabled={!taskText.trim()}
						variant="contained"
						color="primary"
						onClick={handleAddTask}
						sx={{ mr: 2 }}
					>
						{t("taskList.add")}
					</Button>
					<Button onClick={() => setTaskText("")}>
						{t("taskList.cancel")}
					</Button>
				</Box>
			</Box>
			{tasks.length > 0 ? (
				<List>
					{tasks.map(({ id, text }) => (
						<TaskItem key={id} text={text} />
					))}
				</List>
			) : (
				<Typography variant="body1">{t("taskList.empty")}</Typography>
			)}
		</Box>
	);
};
