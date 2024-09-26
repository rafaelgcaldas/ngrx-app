import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { BookService } from '../books/book.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), BookService]
};
