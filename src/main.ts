import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TkoNg2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TkoNg2AppComponent);
