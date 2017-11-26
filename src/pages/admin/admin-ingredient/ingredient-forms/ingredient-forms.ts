import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IngredientService} from '../../../../providers/ingredient-service/ingredient-service'
import {Ingredient} from '../../../../model/Ingredient'
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'page-ingredient-forms',
  templateUrl: 'ingredient-forms.html'
})

export class IngredientFormPage{
  
    public form:FormGroup;
    // private ingredient:Ingredient;
    private update:boolean;
    constructor(private ingredientService :IngredientService) { }
  
  
    ionViewDidLoad() {
      //let id = this.route.snapshot.params['id'];
      this.update = false;
  
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required, Validators.pattern[0-9]),
        });
  
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
  
    onSubmit(){
       if(this.update){
        // this.ingredientService.update(this.form.value, this.contact.id);
       }else{
          this.ingredientService.create(this.form.value).subscribe(data => {
          });
      }
    }
  }