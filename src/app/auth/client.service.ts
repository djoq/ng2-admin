import { Injectable }   from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { DataService }       from '../services/data.service';
import { Client }       from './client';
import { Observable }     from 'rxjs/Observable';

declare var $:any;

@Injectable()
export class ClientService {
  private clientsUrl = '/api/users/';
  token: any;

  constructor (private http: Http, private dataService: DataService) {
    this.token = this.dataService.token();
  }

  isLoggedIn() {
    return true;
  }

  loadItem(): Promise<Client> {
    return this.http.get(this.clientsUrl + localStorage.getItem("id") + this.dataService.token() )
    .toPromise()
    .then(this.extractItem)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private extractList(res: Response) {
    let body = res.json();
    return body || [];
  }
  private extractItem(res: Response){
    let body = res.json();
    console.log("EXTRACTION ->", res)
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
