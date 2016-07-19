import { Component, OnInit } from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {DashHead} from "./dash-head/dash-head.component";

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    directives: [ROUTER_DIRECTIVES, DashHead]
})
export class Dashboard implements OnInit {
    constructor() { }

    ngOnInit() { }

    divClick(){
        alert("divClick!");
    }

    btnClick(){
        alert("btnClick!");
    }

    typeBtnClick(){
        alert("typeBtnClick!");
    }

    returnBool()
    {
        return true;
    }

}
