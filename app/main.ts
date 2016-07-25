import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/Rx';

import { appRouterProviders } from './app.routes';


bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders
])
.catch(err => console.error(err));
