import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class GridService {

  columnsCount: number = 14;
  rowsCount: number = 14;

  items = signal<Item[]>([])

  constructor() {
    this.generateItems(this.columnsCount, this.rowsCount);
   }

  generateItems(col: number, row: number) {
    const items: Item[] = [];
    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
      for (let colIndex = 0; colIndex < col; colIndex++) {
        items.push({
          x: row,
          y: col
        } as Item)
      };
    };

    this.items.set(items);
  }

  reset() {
    this.items.update(items => {
      items.forEach(i => i.icon = null);
      return items;
    })
  }
}
