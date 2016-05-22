import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Rx';

@Injectable()

export class FighterSearchService {
  constructor (private http: Http) {}

  private tkoApiUrl = 'http://tko-api.yifanchen.io/fighter_search/';

  getFighter(query: string): Observable<string> {
    return this.http.get(this.tkoApiUrl + query)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }
}
