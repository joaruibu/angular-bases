import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public deleteHero?:string =''
public heroNames:string[]=[

  'spiderman', 'Ironman', 'Hulk', 'hero2'
]

removeLastHeroe():void{
this.deleteHero=  this.heroNames.pop()
}


}
