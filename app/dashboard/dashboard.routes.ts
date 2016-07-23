import {RouterConfig}          from '@angular/router';
import {Dashboard}          from './dashboard.component';
import {ChartComponent} from "../pages/charts/charts.component";
import {TableComponent} from "../pages/tables/components/tables";
import {FormComponent} from "../pages/forms/components/forms";
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
        ]
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'table',
                component: TableComponent
            },
        ]
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'forms',
                component: FormComponent
            },
        ]
    },
];
