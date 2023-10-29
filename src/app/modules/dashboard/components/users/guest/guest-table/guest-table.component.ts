import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule, Sort } from '@angular/material/sort';
import { Nft } from 'src/app/modules/dashboard/models/nft';
import { compare } from 'src/app/shared/functions/compare.function';
import { GuestTableItemComponent } from '../guest-table-item/guest-table-item.component';


@Component({
  selector: 'app-guest-table',
  standalone: true,
  imports: [CommonModule,GuestTableItemComponent,MatSortModule,],
  templateUrl: './guest-table.component.html',
  styleUrls: ['./guest-table.component.scss']
})
export class GuestTableComponent {
  public activeAuction: Nft[] = [];
  addGuest: boolean = false;
  sortedData: Nft[];

  constructor() {
    this.sortedData = this.activeAuction.slice();
  }
  ngOnInit(): void {
    this.activeAuction = [
      {
        id: 1346771,
        title: 'Cripto Cities',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/t_S1sM__cKCFbuhbwQ5JHKNRRggKuPH2O3FM_-1yOxJLRzz9VRMAPaVBibgrumZG3qsB1YxEuwvB7r9rl-F-gI6Km9NlfWhecfPS=h500',
        avatar:
          'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',

        last_bid: 22.0,
        price: 35330.9,
        instant_price: 22.0,
      },
      {
        id: 1346772,
        title: 'Lady Ape Club',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/k95IQpeYutx-lYXwgTZw0kXZl9GAkIOc4Yz3Dr06rndWphZ25kSWyF64aTqT3W4cOxz0eB5LfAss5i9WAR-ZPWVaifijsABLqzEYwHY=h500',
        avatar:
          'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',

        last_bid: 2.8,
        price: 4812.72,
        instant_price: 2.9,
      },
      {
        id: 1346780,
        title: 'The King - Gordon Ryan',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/iYNxP1eXG3C6ujTY4REQ9rBea19Z46oKtKkaDS1XA-ED5iFhFmPrvQPzwx8ZwACydCS2wbZ7K1P89XIED3s8JRcT6Pn0M1-sMifeyQ=h500',
        avatar:
          'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        last_bid: 1.0,
        price: 1602.77,
        instant_price: 2.9,
      },
      {
        id: 1346792,
        title: 'Only by Shvembldr',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/ujFwzDIXN64mJAHZwZ0OgNupowe5jlJPmV8OIrgSDjUAeb3SZRuhsuyPKAw6S2TkUknZvErVVKbzD-rEcs-augb6_LzUE5NVtPxj_w=h500',
        avatar:
          'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        last_bid: 2.0,
        price: 1438.17,
        instant_price: 2.1,
      },
      {
        id: 1346792,
        title: 'Crypto Coven',
        creator: 'Jenny Wilson',
        image:
          'https://lh3.googleusercontent.com/pwjA4CWS9nto8fCis6JzlWwzQgtHUvLlUWcd501LsGQoVUPL5euwhir-2fjPmsJLJ_ovJ7flH_OgDEaALeZrhSXv8Puq85-lZYWuqto=h500',
        avatar:
          'https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg',
        last_bid: 0.8,
        price: 1278.38,
        instant_price: 0.35,
      },
    ];
  }

  sortData(sort: Sort) {
    const data = this.activeAuction.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'instant_price':
          return compare(a.instant_price, b.instant_price, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        case 'last_bid':
          return compare(a.last_bid, b.last_bid, isAsc);
        default:
          return 0;
      }
    });
    this.activeAuction = this.sortedData;
  }

  toogleAddGuest() {
    this.addGuest = !this.addGuest;
  }

}
