import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDto } from '../../dto/icon-dto';
import { IconsSourceService } from '../../services/icons-source.service';
import { IconComponent } from '../icon/icon.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, IconComponent, DragDropModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {

  icons = signal<IconDto[]>([]);

  constructor(private iconsService: IconsSourceService) {
  }

  ngOnInit(): void {
    this.iconsService.getIcons().subscribe(icons => {
      this.icons.set(icons);
    });
  }

}
