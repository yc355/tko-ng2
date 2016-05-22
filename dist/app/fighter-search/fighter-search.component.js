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
        this.searching = false;
    }
    FighterSearchComponent.prototype.ngOnInit = function () {
        this.result =
            {
                link: "http://www.sherdog.com/fighter/Rustam-Khabilov-45417",
                img_url: "http://www1.cdn.sherdog.com/image_crop/200/300/_images/fighter/20140505113920_1MG_5679.JPG",
                name: "Rustam Khabilov",
                nickname: "Tiger",
                age: "29",
                birthday: "1986-11-04",
                locality: "Makhachkala, Republic of Dagestan",
                nationality: "Russia",
                flag_url: "http://www2.cdn.sherdog.com/2236/img/w/flags/ru.png",
                association: "Jackson-Wink MMA",
                height: "5\'10\"",
                weight: "155 lbs",
                weight_class: "Lightweight",
                wins: {
                    total: "19",
                    knockouts: "4",
                    submissions: "5",
                    decisions: "10",
                    others: "0"
                },
                losses: {
                    total: "3",
                    knockouts: "0",
                    submissions: "1",
                    decisions: "2",
                    others: "0"
                },
                draws: 0,
                no_contests: 0,
                fights: [
                    {
                        event: "UFC Fight Night 87 - Overeem vs. Arlovski",
                        date: "May / 08 / 2016",
                        opponent: "Chris Wade",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "Leon Roberts"
                    },
                    {
                        event: "UFC Fight Night 84 - Silva vs. Bisping",
                        date: "Feb / 27 / 2016",
                        opponent: "Norman Parke",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "Marc Goddard"
                    },
                    {
                        event: "UFC Fight Night 61 - Bigfoot vs. Mir",
                        date: "Feb / 22 / 2015",
                        opponent: "Adriano Martins",
                        result: "loss",
                        method: "Decision",
                        method_details: "Split",
                        round: "3",
                        time: "5:00",
                        referee: "Leon Roberts"
                    },
                    {
                        event: "UFC Fight Night 42 - Henderson vs. Khabilov",
                        date: "Jun / 07 / 2014",
                        opponent: "Benson Henderson",
                        result: "loss",
                        method: "Submission",
                        method_details: "Rear-Naked Choke",
                        round: "4",
                        time: "1:16",
                        referee: "Mario Yamasaki"
                    },
                    {
                        event: "UFC Fight Night 31 - Fight for the Troops 3",
                        date: "Nov / 06 / 2013",
                        opponent: "Jorge Masvidal",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "John McCarthy"
                    },
                    {
                        event: "UFC 159 - Jones vs. Sonnen",
                        date: "Apr / 27 / 2013",
                        opponent: "Yancy Medeiros",
                        result: "win",
                        method: "TKO",
                        method_details: "Thumb Injury",
                        round: "1",
                        time: "2:32",
                        referee: "Dan Miragliotta"
                    },
                    {
                        event: "UFC - The Ultimate Fighter 16 Finale",
                        date: "Dec / 15 / 2012",
                        opponent: "Vinc Pichel",
                        result: "win",
                        method: "KO",
                        method_details: "Suplex and Punches",
                        round: "1",
                        time: "2:15",
                        referee: "Chris Tognoni"
                    },
                    {
                        event: "Pure MMA 2 - Next Episode",
                        date: "May / 12 / 2012",
                        opponent: "Jason Dent",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "One FC 2 - Battle of Heroes",
                        date: "Feb / 11 / 2012",
                        opponent: "Rodrigo Ribeiro",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "Yuji Shimada"
                    },
                    {
                        event: "ProFC Grand Prix Global - Caucasus",
                        date: "Sep / 26 / 2011",
                        opponent: "Nazir Kadyzhev",
                        result: "win",
                        method: "TKO",
                        method_details: "Punches",
                        round: "1",
                        time: "4:58",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Selection Ukraine 2010 - The Finals",
                        date: "Feb / 12 / 2011",
                        opponent: "Ruslan Khaskhanov",
                        result: "loss",
                        method: "Decision",
                        method_details: "Split",
                        round: "3",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Selection Ukraine 2010 - Round 6",
                        date: "Nov / 06 / 2010",
                        opponent: "Sergei Utochkin",
                        result: "win",
                        method: "Submission",
                        method_details: "Armbar",
                        round: "1",
                        time: "1:28",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Selection Ukraine 2010 - Clash of the Titans",
                        date: "Sep / 18 / 2010",
                        opponent: "Gleb Morozov",
                        result: "win",
                        method: "Submission",
                        method_details: "Armbar",
                        round: "1",
                        time: "4:36",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Selection Ukraine 2010 - Round 2",
                        date: "May / 07 / 2010",
                        opponent: "Andrei Balakhonov",
                        result: "win",
                        method: "Submission",
                        method_details: "Armbar",
                        round: "1",
                        time: "1:34",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Challenge - 2009 Selections 8",
                        date: "Oct / 04 / 2009",
                        opponent: "Said Khalilov",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "2",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Challenge - 2009 Selections 6",
                        date: "Sep / 05 / 2009",
                        opponent: "Gasanali Gasanaliev",
                        result: "win",
                        method: "Decision",
                        method_details: "Split",
                        round: "3",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Challenge 18 - Netherlands Day Two",
                        date: "Aug / 16 / 2009",
                        opponent: "Akin Duran",
                        result: "win",
                        method: "KO",
                        method_details: "Slam",
                        round: "1",
                        time: "0:08",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Challenge - 2009 Selections 4",
                        date: "Jun / 24 / 2009",
                        opponent: "Vener Galiev",
                        result: "win",
                        method: "Decision",
                        method_details: "Split",
                        round: "2",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "M-1 Challenge - 2009 Selections 2",
                        date: "Apr / 19 / 2009",
                        opponent: "Vladimir Papusha",
                        result: "win",
                        method: "Submission",
                        method_details: "Armbar",
                        round: "1",
                        time: "2:04",
                        referee: "Vacheslov Kiselov"
                    },
                    {
                        event: "CSFU - Champions League",
                        date: "Sep / 13 / 2008",
                        opponent: "Hamiz Mamedov",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "CFF - International MMA Tournament",
                        date: "Dec / 09 / 2007",
                        opponent: "Karen Grigoryan",
                        result: "win",
                        method: "Decision",
                        method_details: "Unanimous",
                        round: "3",
                        time: "5:00",
                        referee: "N/A"
                    },
                    {
                        event: "TFC 1 - Tsumada Fighting Championship",
                        date: "Aug / 03 / 2007",
                        opponent: "Bagautdin Abasov",
                        result: "win",
                        method: "Submission",
                        method_details: "Triangle Choke",
                        round: "2",
                        time: "2:14",
                        referee: "N/A"
                    }
                ]
            };
    };
    FighterSearchComponent.prototype.onSearch = function (query) {
        var _this = this;
        if (this.searching == false) {
            this.query = query;
            this.searching = true;
            this.notFoundMessage = null;
            this.result = null;
            this.fighterSearchService.getFighter(query)
                .subscribe(function (response) { _this.result = response; }, function (error) {
                _this.searching = false;
                _this.notFoundMessage = 'Fighter not found.';
            }, function () { _this.searching = false; });
        }
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