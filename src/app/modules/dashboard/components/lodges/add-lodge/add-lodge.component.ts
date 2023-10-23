import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-add-lodge',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule],
  templateUrl: './add-lodge.component.html',
  styleUrls: ['./add-lodge.component.scss']
})
export class AddLodgeComponent {

}
