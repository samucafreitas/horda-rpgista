import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichaEditPage } from './ficha-edit';

@NgModule({
  declarations: [
    FichaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FichaEditPage),
  ],
})
export class FichaEditPageModule {}
