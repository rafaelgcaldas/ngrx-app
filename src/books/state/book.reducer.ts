import { createReducer, on } from "@ngrx/store";
import type { Book } from "../book.model";
import { BookActions } from "./book.actions";

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
  on(BookActions.loadBooks, (currentState) => {
    return {
      ...currentState,
      status: BookStatus.success,
      books: initalBooks
    }
  })
)

const initalBooks = [
  {
    id: 1,
    name: 'John Smith',
  },
  {
    id: 2,
    name: 'Jkins Smith',
  },
]
