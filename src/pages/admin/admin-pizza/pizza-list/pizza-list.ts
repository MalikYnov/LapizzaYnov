import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PizzaService} from '../../../../providers/pizza-service/pizza-service'
import {Pizza} from '../../../../model/Pizza'
import{PizzaFormPage} from '../pizza-forms/pizza-forms'

import { HomePage } from '../../../../pages/home/home';
@Component({
  selector: 'page-pizza-list',
  templateUrl: 'pizza-list.html'
})
export class PizzaListPage {

  pizzaList: Pizza[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService: PizzaService) {
    this.pizzaList = [];
  }

  ionViewDidLoad() {

    this.pizzaList = this.pizzaService.get();
    
  }

  newPizza(event){
    this.navCtrl.push(PizzaFormPage);
  }

   update(ingredient){
     this.navCtrl.push(PizzaFormPage);
   }
}