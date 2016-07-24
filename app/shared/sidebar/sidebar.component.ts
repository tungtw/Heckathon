import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Menu, MenuItem, Button, PanelMenu,} from 'primeng/primeng';
import {ChartItem} from "./sidebar-item";


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['../style-shared.css', '../main.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, Menu, Button, PanelMenu]
})

export class SidebarComponent implements OnInit {
    private _chartItems:MenuItem[];

    get chartItems():MenuItem[] {
        return this._chartItems;
    }

    set chartItems(value:MenuItem[]) {
        this._chartItems = value;
    }
    constructor(private router: Router) {}
    ngOnInit():any {
        this._chartItems = [
            {
                label: 'Chart',
                icon: 'fa-area-chart',
                items: this.getItems()
            }
        ];
    }

    private getItems():Array<ChartItem> {
        return [
            new ChartItem('Chart 1', 'fa fa-line-chart', ()=>{this.router.navigate(['/dashboard', '/chart'])}),
            new ChartItem('Chart 2', 'fa fa-line-chart', ()=>{this.router.navigate(['/dashboard', '/chart'])})
        ];
    }

    isActive = false;
    showMenu:string = '';

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element:any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
