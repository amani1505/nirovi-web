import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Nft } from '../../../models/nft';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[lodge-table-item]',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule, CurrencyPipe],
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
  
})
export class TableItemComponent {
  @Input() auction = <Nft>{};

  constructor() {}

}
