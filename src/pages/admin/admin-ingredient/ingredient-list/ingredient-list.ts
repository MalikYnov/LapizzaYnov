import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IngredientService} from '../../../../providers/ingredient-service/ingredient-service'
import {Ingredient} from '../../../../model/Ingredient'
import{IngredientFormPage} from '../ingredient-forms/ingredient-forms'
@Component({
  selector: 'page-ingredient-list',
  templateUrl: 'ingredient-list.html'
})
export class IngredientListPage {

  ingredientList: Ingredient[];
  constructor(public navCtrl: NavController,public navParams: NavParams, public ingredientService: IngredientService) {
    this.ingredientList = [];
  }

  ionViewDidLoad() {

    this.ingredientService.get().then((data: Array<Ingredient>) =>{
        this.ingredientList = data;
    });
    
    console.log(this.ingredientService);
  }

  newIngredient(event){
    alert("aaaaaaaa");
    this.navCtrl.push(IngredientFormPage);
  }

  // update(ingredient){
  //   this.navCtrl.push(IngredientFormPage);
  // }
}