import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'avengersapp';

  public ngOnInit(): void {
    console.log('Init');
  }
  public ngAfterViewInit(): void {
    console.log('After view init');
  }
  public ngOnDestroy(): void {
    console.log('Destroy');
  }
}
