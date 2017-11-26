import { Component } from '@angular/core';
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
    private update:boolean;
    constructor(private ingredientService :IngredientService) { }
    ingredient:Ingredient;
  
    ionViewDidLoad() {
      //let id = this.route.snapshot.params['id'];
      this.update = false;

  
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
          this.ingredientService.create(this.ingredient).subscribe(data => {
          });
      }
    // }
  }