import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDto } from '../../dto/icon-dto';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  @Input({ required: true }) icon: IconDto | undefined;
  @Input() width: number = 40;
  @Input() height: number = 40;
}
