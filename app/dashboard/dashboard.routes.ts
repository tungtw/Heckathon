import {RouterConfig}          from '@angular/router';
import {Dashboard}          from './dashboard.component';
import {ChartComponent} from "../pages/charts/components/charts";
export const dashboardRoutes:RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'chart',
                component: ChartComponent
            },
            // {
            //   path: ':id',
            //   component: CrisisDetailComponent,
            //   canDeactivate: [CanDeactivateGuard]
            // },
            // {
            //   path: '',
            //   component: CrisisListComponent
            // }
        ]
    }
];
