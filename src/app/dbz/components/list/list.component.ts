import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inerface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input() // value can be received from parent
  characterList: Character[] = [ // default value
    {
      name: 'Pepe',
      power: 1000
    }
  ];


  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void {
    if(!id) return

    this.onDeleteId.emit(id);
  }
}
