import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  private PATH = 'chat/';
  constructor(private db: AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
  }

  getAll(userId: string) {
    if (!userId) return;
    return this.db.list(this.PATH, ref => ref.orderByChild('name').limitToLast(10))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  sendMsg(userId: string, username: string, msg: string) {
    if (!userId) return;
    return new Promise((resolve) => {
      this.db.list(this.PATH).push({username: username, msg: msg}).then(() => resolve());
    });
  }
}
