import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Your code goes here
    window.addEventListener('load', () => {
      const showMenuElement = document.querySelector('#showMenu');
      if (showMenuElement) {
        showMenuElement.addEventListener('click', (event) => {
          const mobileNavElement = document.querySelector('#mobileNav');
          if (mobileNavElement) {
            mobileNavElement.classList.remove('hidden');
          }
        });
      }

      const hideMenuElement = document.querySelector('#hideMenu');
      if (hideMenuElement) {
        hideMenuElement.addEventListener('click', (event) => {
          const mobileNavElement = document.querySelector('#mobileNav');
          if (mobileNavElement) {
            mobileNavElement.classList.add('hidden');
          }
        });
      }

      document.querySelectorAll('[toggleElement]').forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
          const answerElement = toggle.querySelector('[answer]');
          const caretElement = toggle.querySelector('img');
          if (answerElement && caretElement) {
            if (answerElement.classList.contains('hidden')) {
              answerElement.classList.remove('hidden');
              caretElement.classList.add('rotate-90');
            } else {
              answerElement.classList.add('hidden');
              caretElement.classList.remove('rotate-90');
            }
          }
        });
      });
    });
  }
}
