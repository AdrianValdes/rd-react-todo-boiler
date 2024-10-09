import { List, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { TaskItem } from "./TaskItem";
import { Task } from "./types";

/**
 * Renders a task list.
 *
 * @returns A task list
 */
export const TaskList = () => {
	const { t } = useTranslation();
	const taskList: Task[] = [
		{ id: 1, text: "hello", completed: false },
		{ id: 2, text: "world", completed: true },
		{ id: 3, text: "!", completed: false },
	];

	return (
		<Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
			<Typography variant="h3" gutterBottom>
				{t("taskList.title")}
			</Typography>
			{taskList.length > 0 ? (
				<List>
					{taskList.map(({ id, text }) => (
						<TaskItem key={id} text={text} />
					))}
				</List>
			) : (
				<Typography variant="body1">{t("taskList.empty")}</Typography>
			)}
		</Box>
	);
};
