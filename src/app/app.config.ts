import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { InMemoryDataService } from './in-memory-data-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),


    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService,
        { delay: 500 }
      )
    )
  ]
};
