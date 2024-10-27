import { Routes } from '@angular/router';
import { authenticationGuard } from 'src/authentication/authentication.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'tickets',
    canActivate: [authenticationGuard],
    loadComponent: () =>
      import('./pages/tickets/tickets.component').then(
        (m) => m.TicketsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
