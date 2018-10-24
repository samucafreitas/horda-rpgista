import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../providers/auth/auth-service';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
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
