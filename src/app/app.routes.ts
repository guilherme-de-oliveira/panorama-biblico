import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'slide/:id',
    loadComponent: () =>
      import('./view-slide/view-slide.page').then((m) => m.ViewSlidePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

