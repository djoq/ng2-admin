import { Injectable }   from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp, URLSearchParams, RequestOptions, Headers, Response } from '@angular/http';
import { DataService }       from '../services/data.service';
import { Observable }   from 'rxjs/Observable';
import { Observer }     from 'rxjs/Observer';
import { Plot }       from './plot';

declare var $:any;

@Injectable()
export class PlotService {
  plots$: Observable<Plot[]>;
  private token: any;
  private plotsUrl = "/api/plots/";
  private jsonp_params: URLSearchParams;

  plot$: Observable<Plot[]>;
  private _plotObserver: Observer<Plot[]>;
  private _storePlots: {
    plots: Plot[];
    plot: any;
  };

  constructor (private http: Http, private dataService: DataService, private router: Router) {
    this._storePlots = { plots: [], plot: {} };
    this.token = this.dataService.token();
    this.plots$ = new Observable<Plot[]>(observer =>  this._plotObserver = observer).share();
    this.jsonp_params = new URLSearchParams();
    this.jsonp_params.set('callback', 'JSONP_CALLBACK');
  }

  isLoggedIn() {
    return true;
  }

  loadItem(endpoint): Promise<Plot> {
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
