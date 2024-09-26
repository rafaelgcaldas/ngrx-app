import { Injectable } from "@angular/core";
import type { Book } from "./book.model";
import { delay, of } from "rxjs";

Injectable({
  providedIn: 'root'
})
export class BookService {

  getBookList(): Book[] {
    return [
      {
        id: 1,
        name: 'John Smith',
      },
      {
        id: 2,
        name: 'Jkins Smith',
      },
    ]
  }

  getBoooksObservable() {
    return of(this.getBookList())
      .pipe(delay(1000))
  }
}