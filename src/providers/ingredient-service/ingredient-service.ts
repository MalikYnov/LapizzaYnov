import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ingredient} from '../../model/Ingredient'
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientService {

    private readonly url = "https://lapizza-y-malik10.c9users.io/ingredient"

    constructor(public http: HttpClient) {
  }

  get () {
    let ingredientList: Array<Ingredient> = new Array<Ingredient>();
     return new Promise <Array<Ingredient>>(resolve => {
        this.http.get(this.url).subscribe((data: Array<any>) => {
        console.log(data);
        for (let i = 0; i< data.length; i++){
          ingredientList.push(new Ingredient(data[i]['_id'],data[i]['name'],data[i]['weight'],data[i]['price']))
        }
        resolve(ingredientList);
    });
  });
}

  getById(id:string){
    return new Promise <Ingredient>(resolve => {
      
    this.http.get(this.url + "/" + id)
    .subscribe( (data: Ingredient) => {
      let ingredient:Ingredient = data;

        resolve(ingredient);
      });
    });
  }  

  create(ingredient:Ingredient){
      return this.http.post(this.url + "/save", ingredient);
  }

  delete(id: string){
    return this.http.delete(this.url + "/" +  id);
  }
   update(ingredient: Ingredient){
     return this.http.put(this.url + "/put", ingredient)
   }
}