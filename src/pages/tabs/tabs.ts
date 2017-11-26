import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DisplayPizza } from '../display-pizza/display-pizza';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DisplayPizza;
  tab3Root = ContactPage;

  constructor() {

  }
}
