import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaFormsPage } from './pizza-forms';

@NgModule({
  declarations: [
    PizzaFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaFormsPage),
  ],
})
export class PizzaFormsPageModule {}
