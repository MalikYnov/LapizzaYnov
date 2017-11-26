import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IngredientService} from '../../../../providers/ingredient-service/ingredient-service'
import {Ingredient} from '../../../../model/Ingredient'
@Component({
  selector: 'page-ingredient-forms',
  templateUrl: 'ingredient-forms.html'
})
export class IngredientFormPage {

  ingredientList: Ingredient[];
  constructor(public navCtrl: NavController, public ingredientService: IngredientService) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DisplayPizzaPage');
    this.ingredientService.get().then((data: Array<Ingredient>) =>{
        this.ingredientList = data;
    });
    
    console.log(this.ingredientService);
  }
}