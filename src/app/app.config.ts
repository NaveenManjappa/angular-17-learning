import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SubscribeService } from './Services/subscribe.service';

export const appConfig: ApplicationConfig = {
  providers: [SubscribeService,provideRouter(routes)]

};
