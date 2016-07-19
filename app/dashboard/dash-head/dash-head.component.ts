import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'dash-head',
  templateUrl: './dash-head.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DashHead implements OnInit {
  constructor(){
  }

  ngOnInit(){
  }

}


