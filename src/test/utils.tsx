/**
 * @description This file contains a utility function that wraps the render function from
 * @testing-library/react to include the Redux store provider. This is useful
 * for testing components that rely on Redux state. @see {@link https://redux.js.org/usage/writing-tests}
 *
 */

import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { setupStore } from "../store/store";
import type { AppStore, RootState } from "../store/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: Partial<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
