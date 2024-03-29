import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    name:'',
    pow: 0
  };

  emitCharacter():void{

    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.pow= 0;
  }
}
