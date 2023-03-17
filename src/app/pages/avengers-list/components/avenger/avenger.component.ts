import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvengerI } from 'src/app/core/avenger.interface';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent implements OnInit {
  @Input() public avenger?: AvengerI
  @Output() public onActiveAvenger = new EventEmitter<void>()
  ngOnInit(): void {
    console.log('Init avenger');
  }
  public activeAvenger(){
    this.onActiveAvenger.emit()
  }
}
