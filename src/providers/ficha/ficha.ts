import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
/*
  Generated class for the FichaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FichaProvider {

  private PATH = 'users/';

  constructor(private db: AngularFireDatabase) {

  }

  getAll(userId: string) {
    if (!userId) return;
    return this.db.list(this.PATH + userId, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string, userId: string) {
    if (!userId) return;
    return this.db.object(this.PATH + userId + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(ficha: any, userId: string) {
    if (!userId) return;
    return new Promise((resolve, reject) => {
      if (ficha.key) {
        this.db.list(this.PATH + userId)
          .update(ficha.key, { name: ficha.name, 
                              ancestralidade: ficha.ancestralidade,
                              trilha_aprendiz: ficha.trilha_aprendiz,
                              trilha_especialista: ficha.trilha_especialista,
                              trilha_mestre: ficha.trilha_mestre,
                              insanidade: ficha.insanidade,
                              corrupcao: ficha.corrupcao,
                              poder: ficha.poder,
                              nivel: ficha.nivel,
                              forca: ficha.forca,
                              intelecto: ficha.intelecto,
                              agilidade: ficha.agilidade,
                              vontade: ficha.vontade,
                              percepcao: ficha.percepcao,
                              modificador: ficha.modificador})
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH + userId)
          .push({ name: ficha.name, 
                  ancestralidade: ficha.ancestralidade,
                  trilha_aprendiz: ficha.trilha_aprendiz,
                  trilha_especialista: ficha.trilha_especialista,
                  trilha_mestre: ficha.trilha_mestre,
                  insanidade: ficha.insanidade,
                  corrupcao: ficha.corrupcao,
                  poder: ficha.poder,
                  nivel: ficha.nivel,
                  forca: ficha.forca,
                  intelecto: ficha.intelecto,
                  agilidade: ficha.agilidade,
                  vontade: ficha.vontade,
                  percepcao: ficha.percepcao,
                  modificador: ficha.modificador})
          .then(() => resolve());
      }
    })
  }

  remove(key: string, userId: string) {
    return this.db.list(this.PATH + userId).remove(key);
  }
}
