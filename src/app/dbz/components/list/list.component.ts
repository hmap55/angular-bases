import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListDbzComponent {

  @Input()
  public characterList: Character[] =[]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id:string): void{

    this.onDeleteId.emit(id);
    console.log(id);
}


}
