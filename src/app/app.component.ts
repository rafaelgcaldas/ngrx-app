import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { Book } from '../books/book.model';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-app';

  bookService = inject(BookService);

  books$ = this.bookService.getBoooksObservable()

  books: Book[] = [];
}
