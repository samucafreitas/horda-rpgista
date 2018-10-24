import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichaSistema1Page } from '../ficha-sistema1/ficha-sistema1';

/**
 * Generated class for the DetalhesSistema1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-sistema1',
  templateUrl: 'detalhes-sistema1.html',
})
export class DetalhesSistema1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesSistema1Page');
  }
  criarFicha1(){
    this.navCtrl.push(FichaSistema1Page);
  }

}
