import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../pages/welcome/welcome';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    afAuth: AngularFireAuth, 
    private toastCtrl: ToastController) {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.rootPage = WelcomePage;
      }
      else {
        this.rootPage = TabsPage;
        if (!user.emailVerified) {
          toast.setMessage('Por favor, verifique seu e-mail para ativar sua conta!');
          toast.present();
        }
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
