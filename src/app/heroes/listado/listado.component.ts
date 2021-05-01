import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  Heroes:string []= ['Spiderman', 'Superman', 'Goku', 'Thor'];
  HeroeBorrado: string = '';

  borrarHeroe (){
    console.log('Borrando...');
    this.HeroeBorrado = this.Heroes.pop() || ' ';
    
  }

}
