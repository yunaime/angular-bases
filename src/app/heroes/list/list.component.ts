import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroeNames: string[] = ['Sppiderman', 'Ironman', 'hulk', 'She hulk', 'Thor']

  deletedHeroe?: string;

  deleteLast():void {
    this.deletedHeroe = this.heroeNames.pop()
  }

  generate(): void {
    this.heroeNames = ['Sppiderman', 'Ironman', 'hulk', 'She hulk', 'Thor']
  }
}
