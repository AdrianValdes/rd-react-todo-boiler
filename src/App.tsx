import { CssBaseline } from "@mui/material";
import { TaskList } from "./features/tasks/TaskList";
import {} from "./store/hooks";

function App() {
	return (
		<>
			<CssBaseline />
			<TaskList />
		</>
	);
}

export default App;
