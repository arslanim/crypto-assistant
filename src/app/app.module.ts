import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RatePage } from "../pages/rate/rate";
import { ExmoService } from "./services/exmo-service/exmo.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorHttpInterceptor} from "./interceptors/error-http.interceptor";
import {ErrorHttpInterceptorService} from "./services/error-http-interseptor-service/error-http-interceptor.service";
import {ErrorComponent} from "./components/error/error";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RatePage,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ErrorHttpInterceptorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    },
    ExmoService
  ]
})
export class AppModule {}
