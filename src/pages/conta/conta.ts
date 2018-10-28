import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../providers/auth/auth-service';
import { AdMobFree, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  constructor(platform: Platform, public admob: AdMobFree, public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  showRewardedAds() {
    const rewardedVideoConfig: AdMobFreeRewardVideoConfig = {
      id: 'ca-app-pub-4850396541636434/3220519626',
      isTesting: true,
      autoShow: true
    };
    this.admob.rewardVideo.config(rewardedVideoConfig);
    this.admob.rewardVideo.prepare()
      .then(() => {
        this.admob.rewardVideo.show()
      })
      .catch(e => console.log(e));
  }
  public signOut() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.parent.parent.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

}
