import { RoomPage } from './../pages/room/room';
import { AddRoomPage } from './../pages/add-room/add-room';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AdMobFree } from '@ionic-native/admob-free';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { ListafichasPageModule } from '../pages/listafichas/listafichas.module';
import { DetalhesSistema1PageModule } from '../pages/detalhes-sistema1/detalhes-sistema1.module';
import { DetalhesSistema2PageModule } from '../pages/detalhes-sistema2/detalhes-sistema2.module';
import { FichaSistema1PageModule } from '../pages/ficha-sistema1/ficha-sistema1.module';
import { FichaSistema2PageModule } from '../pages/ficha-sistema2/ficha-sistema2.module';
import { FichaProvider } from '../providers/ficha/ficha';
import { ResetpasswordPageModule } from '../pages/resetpassword/resetpassword.module';
import { SigninPageModule } from '../pages/signin/signin.module';
import { SigninwithemailPageModule } from '../pages/signinwithemail/signinwithemail.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { AuthService } from '../providers/auth/auth-service';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { ContaPage } from '../pages/conta/conta'
import { RoomsPage } from '../pages/rooms/rooms';
import { ChatProvider } from '../providers/chat/chat';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContaPage,
    AddRoomPage,
    RoomsPage,
    RoomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    ListafichasPageModule,
    DetalhesSistema1PageModule,
    DetalhesSistema2PageModule,
    FichaSistema1PageModule,
    FichaSistema2PageModule,
    ResetpasswordPageModule,
    SigninPageModule,
    SigninwithemailPageModule,
    SignupPageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyABYpOV8BzfKFik5f5Xo_hkhtkr-7TTEgU",
      authDomain: "horda-rpgista-f5256.firebaseapp.com",
      databaseURL: "https://horda-rpgista-f5256.firebaseio.com",
      projectId: "horda-rpgista-f5256",
      storageBucket: "horda-rpgista-f5256.appspot.com",
      messagingSenderId: "521627438687"
    }),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContaPage,
    AddRoomPage,
    RoomsPage,
    RoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FichaProvider,
    AuthService,
    GooglePlus,
    Facebook,
    TwitterConnect,
    ChatProvider,
    AdMobFree,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}