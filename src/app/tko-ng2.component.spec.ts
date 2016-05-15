import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TkoNg2AppComponent } from '../app/tko-ng2.component';

beforeEachProviders(() => [TkoNg2AppComponent]);

describe('App: TkoNg2', () => {
  it('should create the app',
      inject([TkoNg2AppComponent], (app: TkoNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tko-ng2 works!\'',
      inject([TkoNg2AppComponent], (app: TkoNg2AppComponent) => {
    expect(app.title).toEqual('tko-ng2 works!');
  }));
});
