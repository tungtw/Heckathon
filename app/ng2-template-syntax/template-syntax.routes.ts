import {RouterConfig}          from '@angular/router';
import {TemplateSyntax}          from './template-syntax.component';
export const templateSyntaxRoutes:RouterConfig = [
  {
    path: '',
    redirectTo: '/template-syntax',
    pathMatch: 'full'
  },
  {
    path: 'template-syntax',
    component: TemplateSyntax,
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
