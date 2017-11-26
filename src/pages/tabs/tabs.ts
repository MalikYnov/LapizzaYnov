import { Component } from '@angular/core';
import {IngredientListPage} from '../../pages/admin/admin-ingredient/ingredient-list/ingredient-list';
import { HomePage } from '../home/home';
import { DisplayPizza } from '../display-pizza/display-pizza';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DisplayPizza;
  tab3Root = IngredientListPage;

  constructor() {

  }
}
