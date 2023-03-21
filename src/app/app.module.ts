import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
