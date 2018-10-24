import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FichaProvider } from './../../providers/ficha/ficha';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-ficha-sistema1',
  templateUrl: 'ficha-sistema1.html',
})
export class FichaSistema1Page {
  fichas: Observable<any>;
  userId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FichaProvider, private toast: ToastController, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;

      this.fichas = this.provider.getAll(this.userId);
    });
  }

  itemClick(ficha: any) {
    this.navCtrl.push('FichaPage', { ficha: ficha });
  }

  newFicha() {
    this.navCtrl.push('FichaEditPage');
  }
 
  editFicha(ficha: any) {
    this.navCtrl.push('FichaEditPage', { ficha: ficha });
  }
 
  removeFicha(key: string) {
    if (key) {
      this.provider.remove(key, this.userId)
        .then(() => {
          this.toast.create({ message: 'Ficha removida sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a ficha.', duration: 3000 }).present();
        });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaSistema1Page');
  }

}
