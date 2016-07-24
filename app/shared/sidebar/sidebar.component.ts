import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
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

    constructor(private router:Router) {
    }

    ngOnInit():any {

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
