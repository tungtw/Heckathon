import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  providers:  [
    HeroService,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
