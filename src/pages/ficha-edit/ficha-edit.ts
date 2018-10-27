import { FichaProvider } from './../../providers/ficha/ficha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-ficha-edit',
  templateUrl: 'ficha-edit.html',
})
export class FichaEditPage {

  title: string;
  form: FormGroup;
  ficha: any;
  userId: string;
  afSubs: Subscription;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: FichaProvider,
    private toast: ToastController, private afAuth: AngularFireAuth) {

    this.ficha = this.navParams.data.ficha || { };
    this.createForm();

    this.setupPageTitle();
  }

  ngOnDestroy(){
    if (this.afSubs) this.afSubs.unsubscribe();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.ficha ? 'Alterando ficha' : 'Nova Ficha';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.ficha.key],
      name: [this.ficha.name, Validators.required],
      ancestralidade: [this.ficha.ancestralidade, Validators.required],
      trilha_aprendiz: [this.ficha.trilha_aprendiz, Validators.required],
      trilha_especialista: [this.ficha.trilha_especialista, Validators.required],
      trilha_mestre: [this.ficha.trilha_mestre, Validators.required],
      insanidade: [this.ficha.insanidade, Validators.required],
      corrupcao: [this.ficha.corrupcao, Validators.required],
      poder: [this.ficha.poder, Validators.required],
      nivel: [this.ficha.nivel, Validators.required],
      forca: [this.ficha.forca, Validators.required],
      intelecto: [this.ficha.intelecto, Validators.required],
      agilidade: [this.ficha.agilidade, Validators.required],
      vontade: [this.ficha.vontade, Validators.required],
      percepcao: [this.ficha.percepcao, Validators.required],
      modificador: [this.ficha.modificador]
    });
  }
 
  onSubmit() {
    const taxaDeCura = this.form.value.forca / 3;
    this.form.value.modificador = Math.floor(taxaDeCura);
    this.afSubs = this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
      if (this.form.valid) {
        this.provider.save(this.form.value, this.userId)
          .then(() => {
            this.toast.create({ message: 'Ficha salva com sucesso.', duration: 3000 }).present();
            this.navCtrl.pop();
          })
          .catch((e) => {
            this.toast.create({ message: 'Erro ao salvar a ficha.', duration: 3000 }).present();
            console.error(e);
          })
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaEditPage');
  }

}
