import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TkoNg2AppComponent } from './app/tko-ng2.component';
import { environment } from './app/environment';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(TkoNg2AppComponent, [HTTP_PROVIDERS]);
