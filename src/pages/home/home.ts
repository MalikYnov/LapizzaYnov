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
  constructor(public navCtrl: NavController,public navParams: NavParams, public pizzaService:PizzaService, private storage: Storage, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {

    this.pizzaList = this.pizzaService.get();
  }

  addPizza(pizza){
    this.storage.set('pizza', pizza.name);
      let toast = this.toastCtrl.create({
        message: 'La pizza à bien était ajouté',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
  }
  displayCart($event){
    this.storage.get('pizza').then((val) => {
      alert(val);
    });
    
  }

  displayPizza(pizza){
    let _id = pizza.id;
    alert(pizza.id);
    this.navCtrl.push(DisplayPizza, {id:_id})
  }

}
