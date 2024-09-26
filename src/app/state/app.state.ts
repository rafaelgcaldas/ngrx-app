import type { BookState } from "../../books/state/book.reducer";

export interface IAppState {
  books: BookState
}