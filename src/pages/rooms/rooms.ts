import { RoomPage } from './../room/room';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import * as firebase from 'firebase';
import { Dice } from "dice-typescript";

@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {

  @ViewChild(Content) content: Content;

  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomkey = this.navParams.get("key") as string;
    this.nickname = this.navParams.get('nickname') as string;
    this.data.type = 'message';
    this.data.nickname = this.nickname;

    let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    joinData.set({
      type:'join',
      user:this.nickname,
      message:this.nickname+' entrou na sala.',
      sendDate:Date()
    });
    
    this.data.message = '';
    firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          if(this.content._scroll) this.content.scrollToBottom(300);
        }
      }, 500);
    });
  }

  sendMessage() {
    let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    newData.set({
      type:this.data.type,
      user:this.data.nickname,
      message:this.data.message,
      sendDate:Date()
    });

    if (this.data.message.startsWith("\\")) {
      const dice = new Dice();
      const result = dice.roll(this.data.message.substr(1,));

      let bot = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
      bot.set({
        type:this.data.type,
        user:"BOT",
        message: result.total + ' <- ' + result.renderedExpression,
        sendDate:Date()
      });
    }
    this.data.message = '';
  }

  exitChat() {
    let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    exitData.set({
      type:'exit',
      user:this.nickname,
      message:this.nickname+' saiu da sala.',
      sendDate:Date()
    });

    this.offStatus = true;

    this.navCtrl.setRoot(RoomPage, {
      nickname:this.nickname
    });
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
