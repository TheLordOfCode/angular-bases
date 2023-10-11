import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
        <br>
        <button (click)="reset()">reset</button>
    `
})

export class contadorComponent{

    titulo = 'Contador App';
    numero: number = 10;
    base: number = 5;
    reset(){
        this.numero = 10;
    }
    acumular(valor:number){
      this.numero += valor;
   }
} 