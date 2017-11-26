import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
import {IngredientService} from '../../../../providers/ingredient-service/ingredient-service'
import {Ingredient} from '../../../../model/Ingredient'
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'page-ingredient-forms',
  templateUrl: 'ingredient-forms.html'
})

export class IngredientFormPage{
  

    // private ingredient:Ingredient;
    ingredient:Ingredient;
    update: boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams,private ingredientService :IngredientService) { 
      this.ingredient.name= " ";
      this.ingredient.weight= " ";
      this.ingredient.price = 0;
      this.update = false;
    }
    
  
  ionViewDidLoad() {
    let id = this.navParams.get('id');


      if(id != null){
        this.update = true;
    
        this.ingredientService.getById(id).then((data: Ingredient ) =>{
            this.ingredient = data;
        })
      }
  }
  
  addIngredient(event){
    if(this.update){
      this.ingredientService.update(this.ingredient);
    }
    else{
      this.ingredientService.create(this.ingredient).subscribe(data => {
      this.navCtrl.pop();
      });
    }
  }
  }