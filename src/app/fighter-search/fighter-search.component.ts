import { Component, OnInit } from '@angular/core';
import { Http, Response }    from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import { FighterSearchService }        from './fighter-search.service';

@Component({
  moduleId: module.id,
  selector: 'fighter-search',
  templateUrl: 'fighter-search.component.html',
  styleUrls: ['fighter-search.component.css'],
  providers: [FighterSearchService]
})

export class FighterSearchComponent implements OnInit {
  public query: string;
  public result: {};
  public notFoundMessage: string;
  public searching: boolean = false;

  constructor(private fighterSearchService: FighterSearchService) {}

  ngOnInit() { }

  onSearch(query: string) {
    if (this.searching == false) {
      this.query = query;
      this.searching = true;
      this.notFoundMessage = null;
      this.result = null;
      this.fighterSearchService.getFighter(query)
        .subscribe(response => {if(Object.keys(response).length != 0) {
                                  this.result = response;
                                } else {
                                  this.searching = false;
                                  this.notFoundMessage = 'Fighter not found.'
                                }},
                   error => {this.searching = false;
                             this.notFoundMessage = 'Fighter not found.'},
                   () => {this.searching = false});
    }
  }
}
