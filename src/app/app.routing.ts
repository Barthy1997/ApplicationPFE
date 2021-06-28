import { Routes, CanActivate } from '@angular/router';
import { AuthentifiactionGuard } from './Authentification/authentifiaction.guard';
import { ConnectionComponent } from './Authentification/connection/connection.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component:ConnectionComponent
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard',
    canActivate:[AuthentifiactionGuard]
  }
]
