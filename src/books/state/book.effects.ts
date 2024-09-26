import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { BookService } from "../book.service";
import { bookActions } from "./book.actions";

export const getBookEffect = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$
      .pipe(
        ofType(bookActions.loadBooks),
        tap(() => console.log('passou pelo effect')),
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