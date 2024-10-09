import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";

import userEvent from "@testing-library/user-event";
import { TaskList } from "./TaskList";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({ t: (key: string) => key }),
}));

describe("TaskList", () => {
	it("should render a task item correctly", () => {
		const preloadedState = {
			tasks: [{ id: "1", text: "Test task", completed: false }],
		};
		renderWithProviders(<TaskList />, { preloadedState });

		expect(screen.getByText("Test task")).toBeInTheDocument();
		expect(screen.getByRole("checkbox")).not.toBeChecked();
	});
	it("should toggle task completion when checkbox is clicked", async () => {
		const preloadedState = {
			tasks: [{ id: "1", text: "Test task", completed: false }],
		};
		renderWithProviders(<TaskList />, { preloadedState });
		const checkbox = screen.getByRole("checkbox");
		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});
});
