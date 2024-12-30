import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home-routing.module').then((m)=>m.HomeRoutingModule)
  },
  {
    path: '**',
    loadChildren: () => import('./warning/warning-routing.module').then((m)=>m.WarningRoutingModule)
  }
];
