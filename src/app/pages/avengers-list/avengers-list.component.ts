import { Component } from '@angular/core';
import { AvengerI } from 'src/app/core/avenger.interface';
import { avengersData } from 'src/app/core/avengers-list-config';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.scss']
})
export class AvengersListComponent {
  public avengers = avengersData
  public avengersActives: number = 0
  public activeAvenger(avenger: AvengerI){
    if(avenger.isActive){
      avenger.isActive = false
      this.avengersActives--
    }
    else{
      avenger.isActive = true
      this.avengersActives++
    }
    console.log(`Is active?: ${avenger.isActive}`);
  }
}
