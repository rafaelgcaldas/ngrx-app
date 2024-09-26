import type { IAppState } from "../../app/state/app.state";

export const bookSelector = (appState: IAppState) => appState.books.books