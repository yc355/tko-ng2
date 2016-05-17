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
  public result: string;

  constructor(
    private fighterSearchService: FighterSearchService
  ) {}

  ngOnInit() {
    this.fighterSearchService.getFighter('ronda')
                 .subscribe(
                   result => {this.result = result},
                   error =>  null);
  }
}
