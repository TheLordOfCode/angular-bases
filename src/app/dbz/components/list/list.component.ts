import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input()
  public characterList: Character[] =[{
      id: uuid(),
      name: 'NA',
      power: 0
  }]
  
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    //TODO emitir id personaje
    if(!id) return;
      console.log(id);
      this.onDelete.emit(id);
  }

}
