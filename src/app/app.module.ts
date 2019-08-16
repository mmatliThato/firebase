import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RegisterPage } from '../pages/register/register';
import { DisplayRoomsPage } from '../pages/display-rooms/display-rooms';
import { BookingPage } from '../pages/booking/booking';
import { DisplaybookingPage } from '../pages/displaybooking/displaybooking';
import { PaymentPage } from '../pages/payment/payment';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddRoomPage,
    RegisterPage,
    DisplayRoomsPage,
    BookingPage,
    DisplaybookingPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddRoomPage,
    RegisterPage,
    DisplayRoomsPage,
    BookingPage,
    DisplaybookingPage,
    PaymentPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
