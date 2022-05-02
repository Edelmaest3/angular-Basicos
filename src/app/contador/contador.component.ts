import { Component } from "@angular/core"; //lo que nos interesa es extraer el componente

@Component({
    selector: 'app-contador',
    template: `
    <!-- <h1>Hola Mundo</h1> -->



<!--##Comentado-Html-->



            <!-------------------------------------------------------------- 
                <h1>{{1+4}}</h1>
            <h1>{{1+1}}</h1>
            <h1>{{'probando texto'}}</h1>-->

            <h1>{{titulo}}</h1>


            <!--<button (click)="numero = numero + 1;">+1</button> -->


            <!--<button (click)="sumar()">+2</button> -->

            <button (click) = "acumulador( base )"> + {{base}}</button>
            <span>{{numero}}

            <!--<button (click)="numero = numero - 1;">-1</button> -->

            <!--<button (click)="restar()">-2</button> -->

            <button (click)="acumulador( -base )"> - {{base}}</button>
    
    `


})
export class ContadorComponent{   //el export es para usar la clase fuera de este archivo

            // title = 'bases';}
            titulo: string = 'Contador App';
            numero: number = 10;
            base : number = 15;
            
            //sumar(){
            //  this.numero+=2;
            //}
            
            //restar(){
            //  this.numero-=2;
            //}
            
            acumulador(valor: number){
                this.numero += valor;
            }

}