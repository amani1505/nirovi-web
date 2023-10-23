import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Nft } from 'src/app/modules/dashboard/models/nft';

@Component({
  selector: '[guest-table-item]',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, CurrencyPipe],
  templateUrl: './guest-table-item.component.html',
  styleUrls: ['./guest-table-item.component.scss'],
})
export class GuestTableItemComponent {
  @Input() auction = <Nft>{};
}
