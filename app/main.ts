import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
// import 'rxjs/Rx';
import './rxjs-operators';
import { appRouterProviders } from './app.routes';


bootstrap(AppComponent, [appRouterProviders])
.catch(err => console.error(err));
