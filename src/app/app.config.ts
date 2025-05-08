import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FontAwesomeModule), // Importa FontAwesomeModule
    {
      provide: FaIconLibrary,
      useFactory: () => {
        const library = new FaIconLibrary();
        library.addIcons(faFacebook, faInstagram, faTwitter);
        return library;
      },
    },
  ],
};