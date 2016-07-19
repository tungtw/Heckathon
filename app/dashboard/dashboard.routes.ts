import { RouterConfig }          from '@angular/router';
import { Dashboard }          from './dashboard.component';
export const dashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dash-head',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
    //   {
    //     path: 'admin',
    //     component: CrisisAdminComponent,
    //     canActivate: [AuthGuard]
    //   },
    //   {
    //     path: ':id',
    //     component: CrisisDetailComponent,
    //     canDeactivate: [CanDeactivateGuard]
    //   },
    //   {
    //     path: '',
    //     component: CrisisListComponent
    //   }
    ]
  }
];
