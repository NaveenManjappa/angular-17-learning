import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

export const USER_TOKEN=new InjectionToken<UserService>('User_Service');

export const appConfig: ApplicationConfig = {
  providers: [    
    {provide:USER_TOKEN,useClass:UserService},    
    provideRouter(routes)
  ]
};
