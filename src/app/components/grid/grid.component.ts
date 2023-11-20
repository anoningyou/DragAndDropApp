import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridService } from '../../services/grid.service';
import { IconComponent } from '../icon/icon.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import { Item } from '../../models/item';
import { IconDto } from '../../dto/icon-dto';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, IconComponent, MatGridListModule, DragDropModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit{

  constructor(public gridService: GridService) {
    
  }

  ngOnInit(): void {

  }

  onDrop(item: Item, event: CdkDragDrop<IconDto>) {
    item.icon = event.item.data; 
  }
}
