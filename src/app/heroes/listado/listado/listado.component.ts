import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'ironman','hulk','thor'];
  ultimoHeroeBorrado?: string ='';
  heroesBorrados: string[] =[];
  h: number = this.heroesBorrados.length;

  borrarUltimoHeroe():void{
   
    this.ultimoHeroeBorrado = this.heroes.pop();
    const heroeborrado = this.ultimoHeroeBorrado;
    console.log('heroe borrado ...');
    console.log(this.heroes);
    this.heroesBorrados.push(heroeborrado?heroeborrado:'');
   }
  borrarHeroe(){
    if (this.heroes.length != 0){
    console.log('borrando heroe ...');
    console.log(this.heroes);
    const heroeborrado = this.heroes.shift()
    console.log('heroe borrado ...');
    console.log(this.heroes);
    this.heroesBorrados.push(heroeborrado?heroeborrado:'');
    }
    //this.heroesBorrados.length
  }
}
