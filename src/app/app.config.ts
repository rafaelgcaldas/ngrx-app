import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';

import { BookService } from '../books/book.service';
import { routes } from './app.routes';
import { appReducers } from './state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { getBookEffect } from '../books/state/book.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    BookService,
    provideStore(appReducers),
    provideEffects({ getBookEffect })
]
};
