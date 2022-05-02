import { Component } from "@angular/core";




@Component({
selector: 'app-heroe', //para indicar que esto es personalizado
templateUrl:'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 50;

    //Como es una clase podemos crear get y set
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;//esto sirve para contruir un string adentro
        //lo de arriba es lo mismo que:
        //return this.nombre + '-' + this.edad.toString;
    }

    cambiarNombre (): void {
        this.nombre = 'Spiderman'; 
    }
    
    cambiarEdad (): void {
        this.edad = 60; 
    }
}