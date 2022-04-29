import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonFluiterComponentMyLib } from './components/button-fluiter/button-fluiter.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponentModule } from './components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyLibComponent,
    ButtonFluiterComponentMyLib,
    CardsComponentModule
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    MyLibComponent,
    ButtonFluiterComponentMyLib,
    CardsComponentModule
  ]

})
export class MyLibModule { }
