import { provideRouter, RouterConfig }  from '@angular/router';

import { dashboardRoutes }       from './dashboard/dashboard.routes';

export const routes: RouterConfig = [
  ...dashboardRoutes,
];

export const appRouterProviders = [
  provideRouter(routes),
  // authProviders,
  // CanDeactivateGuard
];

