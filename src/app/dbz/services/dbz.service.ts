import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from "uuid";

@Injectable({
    providedIn: 'root'
})

export class DbzService {

     public characters: Character[] =[{
        id: uuid(),
        name: 'krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500  
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 18000  
    },
    {
        id: uuid(),
        name: 'yamcha',
        power: 1480
    }
];


    addCharacter(character:Character):void{
        console.log('main page');
        console.log(character);
        const newCharacter:Character ={
            id: uuid(),
            ...character
        }
        this.characters.push(character);
    }
/*
    onDeleteCharacter(index:number){
        this.characters.splice(index,1)
    }
*/
    deleteCharacterById(id: string){
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}