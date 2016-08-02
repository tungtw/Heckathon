import {RouterConfig}          from '@angular/router';
import {Dashboard}          from './dashboard.component';
import {ChartComponent} from "../pages/charts/charts.component";
import {TableComponent} from "../pages/tables/components/tables";
import {FormComponent} from "../pages/forms/components/forms";
import {HomeComponent} from "../pages/home/components/home";
export const dashboardRoutes:RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
        ]
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'chart/:chartNo',
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
