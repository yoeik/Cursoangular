import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number= 45;

    get  nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }
  obtenerNombre (): string {
      return `${this.nombre} - ${this.edad}`; 
  }

  CambiarNombre():void {
      this.nombre= 'Spiderman'; 
  }
  CambiarEdad (){
      this.edad= 28;
  }

}