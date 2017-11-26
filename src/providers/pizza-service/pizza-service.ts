import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pizza} from '../../model/Pizza'
import 'rxjs/add/operator/map';

/*
Le service  est fonctionnelle cependant il n'est pas conncecté à l'api.
j'utilise donc un fichier de doonée Json "pizza.json" pour récupérer une liste de pizza
*/
@Injectable()
export class PizzaService {

    private readonly url = "https://lapizza-y-malik10.c9users.io/pizza/"
    public PizzaList: Array<Pizza> = new Array<Pizza>();
    constructor(public http: HttpClient) {
      this.http.get("assets/pizza.json")
      .subscribe( (data: Array<any>) => {
          for (let i = 0; i< data.length; i++){
                this.PizzaList.push(new Pizza(i,data[i]['name'],data[i]['desc'],data[i]['picture'],data[i]['price']))
          }
        });
  }

  get(){

    return this.PizzaList;
    
  }

  getByid(id:number){

          return this.PizzaList[id];

      /* si l'api était fonctionnelle : 

          return new Promise <Pizza>(resolve => {
      
          this.http.get(this.url + "/" + id)
          .subscribe( (data: Ingredient) => {
          let pizza:Pizza = data;

        resolve(pizza);
      });
    });

    */
  }  

  create(pizza: Pizza){

    /* Si l'api était fonctionnelle :  
    
    return this.http.post(this.url + "save/", pizza).map(
      Response => {} );
      
      */
      this.PizzaList.push(pizza);
  }


  update(pizza: Pizza, oldPizza: Pizza){
      
    let i = this.PizzaList.indexOf(oldPizza);
    this.PizzaList[i] = pizza;

    /* Si l'api était fonctionnelle :  
    
    return this.http.put(this.url + "update/", pizza).map(
      Response => {} );
      
      */
  }

  delete(id:number){
     this.PizzaList[id] = null;
  }
}
