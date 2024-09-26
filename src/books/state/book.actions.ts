import { createAction } from "@ngrx/store";

const loadBooks = createAction('[Books] Load books')

export const BookActions = {
  loadBooks
}