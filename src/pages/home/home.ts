import { Component } from '@angular/core';
import { Pizza } from '../../model/Pizza'
import { NavController, NavParams, Nav } from 'ionic-angular';
import {PizzaService} from '../../providers/pizza-service/pizza-service'
import {DisplayPizza} from '../display-pizza/display-pizza'
import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: Object;
  pushPage: any;
  pizzaList:Pizza[];
  constructor(public navParams: NavParams, public pizzaService:PizzaService, private storage: Storage, private toastCtrl:ToastController) {
    console.log('Constructr');
    this.pushPage = DisplayPizza;
    this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPizzaPage');
    this.pizzaList = this.pizzaService.get();
  }

  addPizza($event){
    this.storage.set('pizza', "1");
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
  }
  displayCart($event){
    alert(this.storage.get('pizza'));
  }

  displayPizza(pizza: any){

    
  }

}
