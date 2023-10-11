import { NgModule } from '@angular/core';
import { contadorComponent } from './components/contador.component';
@NgModule({
   declarations: [
    contadorComponent
],
   exports:[
    contadorComponent
] 
})
export class ContadorModule{}