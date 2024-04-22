import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string= 'iron Man'
public age:number= 45

get capitalizeName():string{
  return this.name.toUpperCase()
}

getHeroDescription():string{
  return `${this.name} tiene ${this.age} años`
}

changeHero():void{
   this.name='Pepeman'
}

changeAge():void{
   this.age=50
}

resetForm(){
  this.name= 'iron Man'
  this.age= 45
}
}
