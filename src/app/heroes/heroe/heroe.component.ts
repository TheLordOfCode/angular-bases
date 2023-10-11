import { Component } from "@angular/core";

@Component({
    selector: 'app-heroes-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string  = 'ironman';
    edad: number = 20;

    obtenerNombre():string {

        return `${this.nombre}-${this.edad}`;
    }
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre = 'spiderman';
    }
    cambiarEdad():void{
        this.edad = 30;
    }

    reset():void{
        this.edad = 20;
        this.nombre = "ironman"
    }
}