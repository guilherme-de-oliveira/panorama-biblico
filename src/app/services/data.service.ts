import { Injectable } from '@angular/core';

export interface Slide {
  title: string;
  subject?: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public slides: Slide[] = [
    {
      title: 'Jesus, o filho de Deus',
      // subject: 'New event: Trip to Vegas',
      id: 1
    },
    {
      title: 'Princípio',
      // subject: 'New event: Trip to Vegas',
      id: 2
    },
    {
      title: 'Aliança',
      subject: 'New event: Trip to Vegas',
      id: 3
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
