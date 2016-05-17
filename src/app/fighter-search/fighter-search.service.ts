import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }       from 'rxjs/Rx';

@Injectable()

export class FighterSearchService {
  constructor (private http: Http) {}

  private tkoApiUrl = 'http://www.tko-api.yifanchen.io/fighter_search/';

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
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
