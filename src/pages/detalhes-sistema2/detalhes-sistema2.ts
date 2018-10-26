import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichaSistema2Page } from '../ficha-sistema2/ficha-sistema2';

@IonicPage()
@Component({
  selector: 'page-detalhes-sistema2',
  templateUrl: 'detalhes-sistema2.html',
})
export class DetalhesSistema2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesSistema2Page');
  }
  criarFicha2(){
    this.navCtrl.push(FichaSistema2Page);
  }

}
