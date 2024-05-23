import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplatePageTitleStrategy } from './helpers/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
      BrowserAnimationsModule
    ),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    provideClientHydration(),
  ],
};
