import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/page.routes').then((mod) => mod.PAGE_ROUTES),
  },

  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
    title: 'Page Not Found',
  },
  { path: '**', component: PageNotFoundComponent, title: '404' },
];
