// import { StockRoutes } from './../../../../../uf-stock-info/src/app/app.routes';
// import { AuthRoutes } from './../../../../../uf-auth/src/app/app.routes';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('uf-auth/authRoutes').then((module) => module.routes),
  },
  {
    path: 'stock-info',
    loadChildren: () =>
      import('uf-stock-info/stockRoutes').then((module) => module.routes),
  },
];
