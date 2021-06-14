import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <button 
    (click)='decrement()' 
    [disabled] = "btnDisabled"
    [ngStyle]="{'color': (btnDisabled)? 'gray': 'black'}">
    {{btnText}}
    </button>`
})

export class AppComponent {
  title = 'Quantity Selector';
  btnText = "-";
  btnDisabled = false;
  counter = 0;
  increment() {
    this.counter++;
  
  }

  decrement() {
    // [disabled]="counter == 0"
    
    this.btnDisabled = true;
    this.btnText = '-';
    this.counter--;
    //this.counter=0;
    
  }
  //btnDisabled = false;
  //decrement() {
   
    
}

