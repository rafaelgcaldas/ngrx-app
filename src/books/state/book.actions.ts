import { createAction, props } from "@ngrx/store";
import type { Book } from "../book.model";

const loadBooks = createAction('[Books] Load books')
const loadBooksSuccess = createAction('[Books] Load books success', props<{ books: Book[] }>())

export const bookActions = {
  loadBooks,
  loadBooksSuccess
}