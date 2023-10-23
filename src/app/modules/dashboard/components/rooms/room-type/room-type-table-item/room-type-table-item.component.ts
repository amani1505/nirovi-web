import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Nft } from 'src/app/modules/dashboard/models/nft';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[room-type-table-item]',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule,CurrencyPipe],
  templateUrl: './room-type-table-item.component.html',
  styleUrls: ['./room-type-table-item.component.scss']
})
export class RoomTypeTableItemComponent {
  @Input() auction = <Nft>{};

}
