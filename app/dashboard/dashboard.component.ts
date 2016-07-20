import {Component, OnInit} from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {DashHead} from "./dash-head/dash-head.component";
import {TopNavComponent} from "../shared/topnav/topnav";
import {SidebarComponent} from "../shared/sidebar/sidebar";

@Component({
  moduleId: module.id,
  selector: 'selector',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES, DashHead, TopNavComponent, SidebarComponent]
})
export class Dashboard implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
