export class Ingredient{
  
    Pizza_ids:number[];
  
    constructor(public id:string = "", public name:string="", public weight:string,
                public price:number = null){
  
    }
}