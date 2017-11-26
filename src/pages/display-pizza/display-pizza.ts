import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PizzaService} from '../../providers/pizza-service/pizza-service'
import {Pizza} from '../../model/Pizza'
/**
 * Generated class for the DisplayPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-display-pizza',
  templateUrl: 'display-pizza.html',
})
export class DisplayPizza{

  pizza:Pizza;
  test:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService:PizzaService) {
    console.log('Constructr');
  }

  ionViewDidLoad() {
    let id = this.navParams.get('id');
    this.pizza = this.pizzaService.getByid(id);
  }

}
