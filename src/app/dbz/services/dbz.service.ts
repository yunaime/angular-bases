import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inerface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  characters: Character[] = [{
    id: uuid(),
    name: 'Crilling',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
]

addCharacter(character: Character): void {
  console.log('Character received', character)

  const newCharacter = {
    id: uuid(),
    ...character
  }

  this.characters.push(newCharacter)
}

// onDeleteId(index: number) {
//    console.log('Remove 1 element at index', index);
//    this.characters.splice(index, 1);
// }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( ch => ch.id !== id)
  }
}
