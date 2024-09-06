import { Injectable } from '@angular/core';

export interface Slide {
  id: number;
  title: string;
  icon?: string; // Only for menu items
  img?: string;
  next?: number;
  prev?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public slides: Slide[] = [
    {
      id: 1,
      title: 'Jesus, o Filho de Deus',
      icon: 'Leao',
      img: '03 - Leao',
      next: 2,
      prev: 0
    },
    {
      id: 2,
      title: 'Jesus, o Filho de Deus',
      img: '04 - 1 Cordeiro',
      next: 3,
      prev: 1
    },
    {
      id: 3,
      title: 'Jesus, o Filho de Deus',
      img: '05 - 2 Cordeiro',
      next: 4,
      prev: 2
    },
    {
      id: 4,
      title: 'Jesus, o Filho de Deus',
      img: '06 - 3 Cordeiro',
      next: 5,
      prev: 3
    },
    {
      id: 5,
      title: 'Jesus, o Filho de Deus',
      img: '07 - 4 Cordeiro',
      next: 6,
      prev: 4
    },
    {
      id: 6,
      title: 'Jesus, o Filho de Deus',
      img: '08 - O Cavaleiro de Cavalo Branco',
      next: 7,
      prev: 5
    },
    {
      id: 7,
      title: 'Princípio',
      icon: 'Principio',
      img: '1 - Principio',
      next: 8,
      prev: 6
    },
    {
      id: 8,
      title: 'Aliança',
      icon: 'Alianca',
      img: '2 - Alianca',
      next: 9,
      prev: 7
    },
    {
      id: 9,
      title: 'Provisão',
      icon: 'Provisao no Egito',
      img: '3 - Provisão no Egito'
    },
  ];

  constructor() { }

  public getSlides(): Slide[] {
    return this.slides;
  }

  public getSlidesById(id: number): Slide {
    return this.slides[id - 1];
  }
}
