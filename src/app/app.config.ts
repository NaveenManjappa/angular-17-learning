import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/user.service';

export const appConfig: ApplicationConfig = {
  providers: [SubscribeService, UserService,provideRouter(routes)]

};
