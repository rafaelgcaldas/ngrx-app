import type { ActionReducerMap } from "@ngrx/store";
import type { IAppState } from "./app.state";
import { bookReducer } from "../../books/state/book.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
  books: bookReducer
}