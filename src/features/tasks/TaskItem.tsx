import { Checkbox, ListItem, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTask } from "./tasksSlice";
import { Task } from "./types";

/**
 * Renders a task item.
 *
 * @param props - The props of the component
 * @returns A task item
 */
export const TaskItem: React.FC<Task> = ({ text, id, completed }) => {
	const dispatch = useDispatch();

	const handleToggle = () => dispatch(toggleTask(id));

	return (
		<ListItem>
			<Checkbox checked={completed} onChange={handleToggle} />
			<ListItemText
				primary={text}
				style={{ textDecoration: completed ? "line-through" : "none" }}
			/>
		</ListItem>
	);
};
