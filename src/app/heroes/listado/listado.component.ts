import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan america'];
  Borrados: string='';

  borrarHeroe(){
    console.log ('Borrando...');
   this.Borrados = this.heroes.shift()||'';
  }

}
