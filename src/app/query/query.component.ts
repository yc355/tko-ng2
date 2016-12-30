import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';

@Component({
  selector: 'query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  private queryError: boolean = false;

  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit() {
    this.queryService.listenFighterSearch().subscribe(
      fighterSearch => { this.onSubmit() }
    )
  }

  onSubmit() {
    this.queryError = false;
    this.queryService.getFighter().subscribe(
      result => {
        this.queryService.loading = false;
        if(!(Object.keys(result).length === 0 && result.constructor === Object)) {
          this.queryService.setResult(result);
        } else {
          this.queryError = true;
        }
       },
      error => {
        this.queryService.loading = false
        this.queryError = true;
      }
    );
  }
}
