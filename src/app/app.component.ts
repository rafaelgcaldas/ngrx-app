import { AsyncPipe } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Store } from '@ngrx/store';

import { BookService } from '../books/book.service';
import { bookActions } from '../books/state/book.actions';
import { bookSelector } from '../books/state/book.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngrx-app'
  inputBook = ''
  
  bookService = inject(BookService);
  store = inject(Store)
  
  books$ = this.store.select(bookSelector)
  
  ngOnInit(): void {
    this.store.dispatch(bookActions.loadBooks())
  }

  addBook() {
    this.store.dispatch(bookActions.addBook({
      id: 3,
      name: this.inputBook
    }))
  }
}
