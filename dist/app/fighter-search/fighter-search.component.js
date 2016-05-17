"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var fighter_search_service_1 = require('./fighter-search.service');
var FighterSearchComponent = (function () {
    function FighterSearchComponent(fighterSearchService) {
        this.fighterSearchService = fighterSearchService;
    }
    FighterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fighterSearchService.getFighter('ronda')
            .subscribe(function (result) { _this.result = result; }, function (error) { return null; });
    };
    FighterSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fighter-search',
            templateUrl: 'fighter-search.component.html',
            styleUrls: ['fighter-search.component.css'],
            providers: [fighter_search_service_1.FighterSearchService]
        }), 
        __metadata('design:paramtypes', [fighter_search_service_1.FighterSearchService])
    ], FighterSearchComponent);
    return FighterSearchComponent;
}());
exports.FighterSearchComponent = FighterSearchComponent;
//# sourceMappingURL=fighter-search.component.js.map