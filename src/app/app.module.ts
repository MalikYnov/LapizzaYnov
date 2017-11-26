import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { DisplayPizza } from '../pages/display-pizza/display-pizza';
import { TabsPage } from '../pages/tabs/tabs';
import {IngredientListPage} from '../pages/admin/admin-ingredient/ingredient-list/ingredient-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { IngredientService } from '../providers/ingredient-service/ingredient-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DisplayPizza,
    IngredientListPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),

    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DisplayPizza,
    IngredientListPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaService,
    IngredientService
    
  ]
})
export class AppModule {}
