import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

  constructor(public gridService: GridService) {
    
  }
  
  getDataJson(): string {
    return JSON.stringify(
    this.gridService.items()
      .filter(i => !!i.icon)
      .map(i => {
        return {
          ID: i.icon?.id,
          x: i.x,
          y: i.y
      }
    }))
  }
  onCalculate(){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/gpx;charset=utf-8,' + encodeURIComponent(this.getDataJson()));
    element.setAttribute('download', `data.json`);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  onReset() {
    this.gridService.reset();
  }
}
