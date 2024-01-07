import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Iron man';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name} - ${ this.age }`
  }

  changeHero():void{
    this.name = 'Spider Man';

  }

  changeAge():void{

    this.age = 30;

  }

  resetForm():void{
    this.name ='Iron man';
    this.age = 45;
  }

}
