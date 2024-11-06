import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideQuillConfig} from 'ngx-quill';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    provideQuillConfig({
      customOptions: [{
        import: 'formats/font',
        whitelist: ['roboto', 'firacode','serif', 'monospace']
      }]
    })]
};
