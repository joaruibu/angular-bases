import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  Counter: {{counter}}
<button (click)="addButtonValue(1)" >+1</button>
<button (click)="addButtonValue(-1)">-1</button>
<button (click)="resetButtonValue()">Resete</button>

  `
})

export class CounterComponent {

  public title:string = 'Hola mundo';
  public counter:number = 20;


  addButtonValue(value:number):void{
     this.counter+=value
  }
  resetButtonValue():void{
     this.counter=20
  }



}
