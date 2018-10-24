import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesSistema1Page } from '../detalhes-sistema1/detalhes-sistema1';
import { FichaSistema1Page } from '../ficha-sistema1/ficha-sistema1';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  abrirDetalhes1(){
    this.navCtrl.push(DetalhesSistema1Page);
  }
  criarFicha1(){
    this.navCtrl.push(FichaSistema1Page);
  }


}
