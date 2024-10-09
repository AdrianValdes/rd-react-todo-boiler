import { ListItem, ListItemText } from "@mui/material";

/**
 * Renders a task item.
 *
 * @param props - The props of the component
 * @returns A task item
 */
export const TaskItem: React.FC<{ text: string }> = ({ text }) => {
	return (
		<ListItem>
			<ListItemText primary={text} />
		</ListItem>
	);
};
