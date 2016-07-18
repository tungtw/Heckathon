import {provideRouter, RouterConfig}  from '@angular/router';

// import { dashboardRoutes }       from './dashboard/dashboard.routes';
import {templateSyntaxRoutes}       from './ng2-template-syntax/template-syntax.routes';

export const routes:RouterConfig = [
  // ...dashboardRoutes,
  ...templateSyntaxRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
  // authProviders,
  // CanDeactivateGuard
];

