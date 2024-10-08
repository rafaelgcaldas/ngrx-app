import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { BookService } from "../book.service";
import { bookActions } from "./book.actions";

export const getBookEffect = createEffect((
  actions$ = inject(Actions), 
  bookService = inject(BookService)
) => {
    return actions$
      .pipe(
        ofType(bookActions.loadBooks),
        switchMap(
          () => bookService.getBoooksObservable().pipe(
            map(books => bookActions.loadBooksSuccess({ books }))
          )
        )
      )
  },
  {
    functional: true,
  }
)