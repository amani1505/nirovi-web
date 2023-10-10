import { trigger, transition, style, animate } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

interface DivElement {
  index: number;
  visible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  showMenu: boolean = false;
  currentYear: number = new Date().getFullYear();
  homeDivs: DivElement[] = [];
  serviceDivs: DivElement[] = [];
  roomsDivs: DivElement[] = [];
  contactDivs: DivElement[] = [];
  footerDivs: DivElement[] = [];

  ngOnInit() {
    // Your code goes here
    // window.addEventListener('load', () => {
    //   const showMenuElement = document.querySelector('#showMenu');
    //   if (showMenuElement) {
    //     showMenuElement.addEventListener('click', (event) => {
    //       const mobileNavElement = document.querySelector('#mobileNav');
    //       if (mobileNavElement) {
    //         mobileNavElement.classList.remove('hidden');
    //       }
    //     });
    //   }
    //   const hideMenuElement = document.querySelector('#hideMenu');
    //   if (hideMenuElement) {
    //     hideMenuElement.addEventListener('click', (event) => {
    //       const mobileNavElement = document.querySelector('#mobileNav');
    //       if (mobileNavElement) {
    //         mobileNavElement.classList.add('hidden');
    //       }
    //     });
    //   }
    //   document.querySelectorAll('[toggleElement]').forEach((toggle) => {
    //     toggle.addEventListener('click', (event) => {
    //       const answerElement = toggle.querySelector('[answer]');
    //       const caretElement = toggle.querySelector('img');
    //       if (answerElement && caretElement) {
    //         if (answerElement.classList.contains('hidden')) {
    //           answerElement.classList.remove('hidden');
    //           caretElement.classList.add('rotate-90');
    //         } else {
    //           answerElement.classList.add('hidden');
    //           caretElement.classList.remove('rotate-90');
    //         }
    //       }
    //     });
    //   });
    // });
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
    console.log(element);
    let mobileNavElement = document.querySelector('#mobileNav');
  }
}
