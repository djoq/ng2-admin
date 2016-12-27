import { Injectable }   from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp, URLSearchParams, RequestOptions, Headers, Response } from '@angular/http';
import { DataService }       from '../services/data.service';
import { Observable }   from 'rxjs/Observable';
import { Observer }     from 'rxjs/Observer';
import { Stat }       from './stat';

declare var $:any;

@Injectable()
export class StatService {
  stats$: Observable<Stat[]>;
  private token: any;
  private statsUrl = "/api/stats/";
  private jsonp_params: URLSearchParams;

  stat$: Observable<Stat[]>;
  private _statObserver: Observer<Stat[]>;
  private _storeStats: {
    stats: Stat[];
    stat: any;
  };

  constructor (private http: Http, private dataService: DataService, private router: Router) {
    this._storeStats = { stats: [], stat: {} };
    this.token = this.dataService.token();
    this.stats$ = new Observable<Stat[]>(observer =>  this._statObserver = observer).share();
    this.jsonp_params = new URLSearchParams();
    this.jsonp_params.set('callback', 'JSONP_CALLBACK');
  }

  isLoggedIn() {
    return true;
  }

  loadItem(endpoint): Promise<Stat> {
    return this.http.get(endpoint )
    .toPromise()
    .then(this.extractItem)
    .catch(this.handleError);
  }

  private extractList(res: Response) {
    let body = res.json();
    return body || [];
  }

  private extractItem(res: Response){
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    if(error.status === 401) {
      console.log("HANDLING ERROR", error.status)
    }
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
