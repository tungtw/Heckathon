import {Component}          from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router';
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
