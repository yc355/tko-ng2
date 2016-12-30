import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QueryService {
  private tkoApiUrl = 'http://tko-api.yifanchen.io/fighter_search/';
  public loading: boolean = false;
  private query: string;
  private fighterSearch = new Subject<any>();
  private result: any;

  constructor(
    private http: Http
  ) { }

  getFighter(): Observable<string> {
    this.loading = true;
    return this.http.get(this.tkoApiUrl + this.query)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  setResult(result: any) {
    this.result = result;
  }

  onFighterNameClick(fighterName: string) {
    this.query = fighterName;
    this.fighterSearch.next(true);
    return this.fighterSearch.asObservable();
  }

  listenFighterSearch() {
    return this.fighterSearch.asObservable();
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    this.result = res.json();
    return this.result || { };
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }
}
