import { createReducer, on } from "@ngrx/store";
import type { Book } from "../book.model";
import { bookActions } from "./book.actions";

enum BookStatus {
  loading = "loading",
  pending = "pending",
  error = "error",
  success = "success"
}

export interface BookState {
  books: Book[]
  error: string | null
  status: BookStatus
}

const initialState: BookState = {
  error: null,
  status: BookStatus.pending,
  books: []
}

export const bookReducer = createReducer (
  initialState,
  on(bookActions.loadBooks, (currentState) => {
    return {
      ...currentState,
      status: BookStatus.loading,
    }
  }),
  on(bookActions.loadBooksSuccess, (currentState, booksObj) => {
    return {
      ...currentState,
      books: booksObj.books,
      status: BookStatus.success,
    }
  })
)
