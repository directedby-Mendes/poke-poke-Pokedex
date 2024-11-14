import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokedex Geração 1', id: 1, url: '/pokedex', iconSrc: 'assets/img/ball1.png'},
    { title: 'Pokedex Geração 2', id: 2, url: '/pokedex', iconSrc: 'assets/img/ball2.png' },
    { title: 'Pokedex Geração 3', id: 3, url: '/pokedex', iconSrc: 'assets/img/ball3.png' },
    { title: 'Pokedex Geração 4', id: 4, url: '/pokedex', iconSrc: 'assets/img/ball4.png' },
    { title: 'Pokedex Geração 5', id: 5, url: '/pokedex', iconSrc: 'assets/img/ball5.png' },
    { title: 'Pokedex Geração 6', id: 6, url: '/pokedex', iconSrc: 'assets/img/ball6.png' },
    { title: 'Pokedex Geração 7', id: 7, url: '/pokedex', iconSrc: 'assets/img/ball7.png' },
    { title: 'Pokedex Geração 8', id: 8, url: '/pokedex', iconSrc: 'assets/img/ball8.png' },
    { title: 'Pokedex Geração 9', id: 9, url: '/pokedex', iconSrc: 'assets/img/ball9.png' },
  ];
  constructor() {}
}
