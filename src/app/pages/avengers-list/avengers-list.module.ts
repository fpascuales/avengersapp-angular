import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengersListComponent } from './avengers-list.component';
import { AvengerComponent } from './components/avenger/avenger.component';



@NgModule({
  declarations: [
    AvengersListComponent,
    AvengerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvengersListComponent
  ]
})
export class AvengersListModule { }
