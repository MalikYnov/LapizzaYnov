import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PizzaService} from '../../providers/pizza-service/pizza-service'
import {Pizza} from '../../model/Pizza'
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService:PizzaService, public alertCtrl: AlertController,private toastCtrl:ToastController,private storage: Storage,) {
    console.log('Constructr');
    this.pizza = null;
  }

  ionViewDidLoad() {
    let id = this.navParams.get('id');
    this.pizza = this.pizzaService.getByid(id);
  }
  

  addPizza(pizza){
    let confirm = this.alertCtrl.create({
      title: 'Ajouter la pizza',
      message: this.pizza.name,
      buttons: [
        {
          text: 'Non',
          handler: () => {
          }
        },
        {
          text: 'Oui',
          handler: () => {
            
            this.storage.set('pizza', pizza.name);
            let toast = this.toastCtrl.create({
              message: 'la pizza à bien était ajouté',
              duration: 3000,
              position: 'bottom'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
          }
        }
      ]
    });
    confirm.present();

  }

}
