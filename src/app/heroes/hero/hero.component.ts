import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // los atributos se pueden declarar usando public y el tipo de datos para mas claridad
  // public name: string = 'ironman';
    name = 'ironman';
    age = 45;

    // esto es una propiedad
    get capitalizedName(): string {
      return this.name.toUpperCase()
    }

    getHeroeDescription(): string {
      return `${this.name} - ${this.age}`
    }

    changeHeroe(): void {
      this.name = 'Spiderman';
    }

    changeAge(): void {
      this.age = 50;
    }

    reset(): void {
      this.age = 45;
      this.name = 'ironman'
    }

}
