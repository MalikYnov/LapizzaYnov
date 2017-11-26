import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IngredientService} from '../../../../providers/ingredient-service/ingredient-service'
import {Ingredient} from '../../../../model/Ingredient'
import{IngredientFormPage} from '../ingredient-forms/ingredient-forms'
@Component({
  selector: 'page-ingredient-list',
  templateUrl: 'ingredient-list.html'
})
export class IngredientListPage {

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

  addIngredient(){
    this.navCtrl.push(IngredientFormPage);
  }
}