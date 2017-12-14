import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PagePage } from '../pages/page/page';
import { NewRequirementPage } from '../pages/new-requirement/new-requirement';
import { UpdateRequirementPage } from '../pages/update-requirement/update-requirement';
import { ViewreqPage } from '../pages/viewreq/viewreq';
import { Req2Page } from '../pages/req2/req2'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PagePage,
    NewRequirementPage,
    UpdateRequirementPage,
    ViewreqPage,
    Req2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    NewRequirementPage,
    UpdateRequirementPage,
    ViewreqPage,
    Req2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}