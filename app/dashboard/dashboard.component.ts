import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {TopNavComponent} from "../shared/topnav/topnav";
import {SidebarComponent} from "../shared/sidebar/sidebar.component";

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../shared/style-shared.css'],
    directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent]
})
export class Dashboard implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
