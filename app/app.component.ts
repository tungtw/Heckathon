import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';
@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
      <a [routerLink]="['/crisis-center/admin']">Crisis Admin</a>
      <a [routerLink]="['/login']">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [
    HeroService,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
