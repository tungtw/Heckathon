import {Component}          from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router';
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    providers: [],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
