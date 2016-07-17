import { Component, OnInit } from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    directives: [ROUTER_DIRECTIVES]
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
