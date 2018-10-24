import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  constructor(public navCtrl: NavController) {

  }
  openFace(){
    window.open("https://www.facebook.com/HordaRPGista");
  }
  openInsta(){
    window.open("https://www.instagram.com/hordaRPGista/");
  }
  openTwitter(){
    window.open("https://twitter.com/HordaRPGista");
  }
  openDisc(){
    window.open("https://discord.me/hordarpgista");
  }
  openYT(){
    window.open("https://www.youtube.com/channel/UCvK-Rlxd4RrVRWsRiR3fwEQ");
  }

}
