import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
import {PizzaService} from '../../../../providers/pizza-service/pizza-service'
import {Pizza} from '../../../../model/Pizza'
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'page-pizza-forms',
  templateUrl: 'pizza-forms.html'
})

export class PizzaFormPage{
  

    // private ingredient:Ingredient;
    pizza:Pizza;
    desc:string;
    name:string;
    price:number;
    constructor(public navCtrl: NavController, public navParams: NavParams,private pizzaService :PizzaService) { 
      this.pizza.name= " ";
      this.pizza.desc= " ";
      this.pizza.price = 0;
    }
    
  
    ionViewDidLoad() {
      //let id = this.route.snapshot.params['id'];
      this.name= "";
      this.desc= "";
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
  
    addIngredient(event){
      //  if(this.update){
      //   // this.ingredientService.update(this.ingredient, this.contact.id);
      //  }else{

      
      this.pizza.name = this.name;
      this.pizza.desc = this.desc;
      this.pizza.price = this.price;
      alert("eeeeeee");
      this.pizzaService.create(this.pizza);
      this.navCtrl.pop();
    
      }
    // }
  }