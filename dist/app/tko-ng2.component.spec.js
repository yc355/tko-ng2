"use strict";
var testing_1 = require('@angular/core/testing');
var tko_ng2_component_1 = require('../app/tko-ng2.component');
testing_1.beforeEachProviders(function () { return [tko_ng2_component_1.TkoNg2AppComponent]; });
testing_1.describe('App: TkoNg2', function () {
    testing_1.it('should create the app', testing_1.inject([tko_ng2_component_1.TkoNg2AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'tko-ng2 works!\'', testing_1.inject([tko_ng2_component_1.TkoNg2AppComponent], function (app) {
        testing_1.expect(app.title).toEqual('tko-ng2 works!');
    }));
});
//# sourceMappingURL=tko-ng2.component.spec.js.map