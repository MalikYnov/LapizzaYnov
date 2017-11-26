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
    name:string;
    weight:string;
    price:number;
    constructor(public navCtrl: NavController, public navParams: NavParams,private ingredientService :IngredientService) { 
      // this.ingredient.name= " ";
      // this.ingredient.weight= " ";
      // this.ingredient.price = 0;
    }
    
  
    ionViewDidLoad() {
      //let id = this.route.snapshot.params['id'];
      this.name= "";
      this.weight= "";
      this.price = null;
  
      // if(id != null){
      //   this.update = true,
      //   this.ingredientService.getById(id).then( data => {
      //     this.ingredient = data;
      //     this.form.patchValue({
      //       name: data.name,
      //       weight: data.weight,
      //       price: data.price,
      //     });
      //   });
      // }
    }
  
    addIngredient(){
      //  if(this.update){
      //   // this.ingredientService.update(this.ingredient, this.contact.id);
      //  }else{
      this.ingredient.name= this.name;
      this.ingredient.weight= this.weight;
      this.ingredient.price = this.price;
      alert("eeeeeee");
      this.ingredientService.create(this.ingredient).subscribe(data => {
      alert(data);
      this.navCtrl.pop();
      
      });
      }
    // }
  }