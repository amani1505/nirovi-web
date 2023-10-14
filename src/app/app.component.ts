import { trigger, transition, style, animate } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  faHotel,
  faUserGroup,
  faTreeCity,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

interface Photos {
  id: string;
  url: string;
  marginL?: number;
  marginR?: number;
}
interface Room {
  id: string;
  photo: string;
  price: string;
  roomType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showMenu: boolean = false;
  currentYear: number = new Date().getFullYear();
  faHotel = faHotel;
  faUserGroup = faUserGroup;
  faTreeCity = faTreeCity;
  faArrowUp = faArrowUp;

  isScrolled: boolean = false;
  scrollProgress = 0;

  currentIndex = 0;
  displayCount: number = 3;

  galleryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  roomsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    margin: 50,
    lazyLoad: true,
    navSpeed: 700,
    nav: false,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
  };

  photos: Photos[] = [
    { id: '1', url: 'assets/images/reception.webp' },
    { id: '2', url: 'assets/images/room.webp' },
    { id: '3', url: 'assets/images/bedroom.webp' },
    { id: '4', url: 'assets/images/room.webp' },
    { id: '5', url: 'assets/images/bedroom.webp' },
  ];
  roomTypes: Room[] = [
    {
      id: '1',
      photo: 'assets/images/reception.webp',
      price: '15,000tsh/Night',
      roomType: 'Standard',
    },
    {
      id: '2',
      photo: 'assets/images/room.webp',
      price: '20,000/Night',
      roomType: 'VIP',
    },
    {
      id: '3',
      photo: 'assets/images/bedroom.webp',
      price: '25000/Night',
      roomType: 'VVIP',
    },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onscroll(): void {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    this.scrollProgress =
      (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
  }

  backToTheTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openMobileNav() {
    this.showMenu = true;
  }
  closeMobileNav() {
    this.showMenu = false;
  }

  navigate(section: HTMLElement) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  close(element: any) {
    document.querySelector('#mobileNav');
  }
  activeSlides: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
}
