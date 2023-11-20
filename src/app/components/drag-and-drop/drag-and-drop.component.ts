import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { IconsComponent } from '../icons/icons.component';
import { ActionsComponent } from '../actions/actions.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    CommonModule, 
    DragDropModule,
    GridComponent,
    IconsComponent,
    ActionsComponent
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss'
})
export class DragAndDropComponent {

}
