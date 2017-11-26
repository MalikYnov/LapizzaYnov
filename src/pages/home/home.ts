import { Component } from '@angular/core';
import { Pizza } from '../../model/Pizza'
import { NavController, NavParams, Nav } from 'ionic-angular';
import {PizzaService} from '../../providers/pizza-service/pizza-service'
import {DisplayPizza} from '../display-pizza/display-pizza'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: Object;
  pushPage: any;
  pizzaList:Pizza[];
  constructor(public navParams: NavParams, public pizzaService:PizzaService, private storage: Storage) {
    console.log('Constructr');
    this.pushPage = DisplayPizza;
    this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPizzaPage');
    this.pizzaList = this.pizzaService.get();
  }

  addPizza($event){
    this.storage.set('pizza', event.target);
  }
  displayCart($event){
    alert(this.storage.get('pizza'));
  }

  displayPizza(pizza: any){

    
  }

}
