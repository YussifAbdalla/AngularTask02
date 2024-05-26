import { ApplicationConfig } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { AppRoutingProvider } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [AppRoutingProvider, provideHttpClient()]
};
