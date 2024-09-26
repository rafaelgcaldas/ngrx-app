import { AsyncPipe } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookService } from '../books/book.service';
import { BookActions } from '../books/state/book.actions';
import { bookSelector } from '../books/state/livro.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngrx-app';
  
  bookService = inject(BookService);
  store = inject(Store)
  
  books$ = this.store.select(bookSelector)
  
  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks())
  }
}
