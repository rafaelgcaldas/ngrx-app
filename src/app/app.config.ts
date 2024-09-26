import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { BookService } from '../books/book.service';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    BookService, 
    provideStore()]
};
