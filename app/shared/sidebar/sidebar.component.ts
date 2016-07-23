import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Menu, MenuItem, Button, PanelMenu,} from 'primeng/primeng';


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['../style-shared.css', '../main.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, Menu, Button, PanelMenu]
})

export class SidebarComponent implements OnInit {
    private chartItems:MenuItem[];

    ngOnInit():any {
        this.chartItems = [
            {
                label: 'Chart',
                icon: 'fa-area-chart',
                items: [
                    {
                        label: 'Chart 1', icon: 'fa fa-line-chart', command: function () {
                        alert("Chart 1 Click!");
                    }
                    },
                    {
                        label: 'Chart 2', icon: 'fa fa-line-chart', command: function () {
                        alert("Chart 2 Click!");
                    }
                    }
                ]
            }
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
