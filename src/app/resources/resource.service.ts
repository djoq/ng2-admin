import { Injectable }   from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp, URLSearchParams, RequestOptions, Headers, Response } from '@angular/http';
import { DataService }       from '../services/data.service';
import { Observable }   from 'rxjs/Observable';
import { Observer }     from 'rxjs/Observer';
import { Resource }       from './resource';

declare var $:any;

@Injectable()
export class ResourceService {
  resources$: Observable<Resource[]>;
  private token: any;
  private resourcesUrl = "/api/resources/";
  private jsonp_params: URLSearchParams;

  resource$: Observable<Resource[]>;
  private _resourceObserver: Observer<Resource[]>;
  private _storeResources: {
    resources: Resource[];
    resource: any;
  };

  constructor (private http: Http, private dataService: DataService, private router: Router) {
    this._storeResources = { resources: [], resource: {} };
    this.token = this.dataService.token();
    this.resources$ = new Observable<Resource[]>(observer =>  this._resourceObserver = observer).share();
    this.jsonp_params = new URLSearchParams();
    this.jsonp_params.set('callback', 'JSONP_CALLBACK');
  }

  isLoggedIn() {
    return true;
  }

  loadList() {
    this.http.get(this.resourcesUrl.slice(0, - 1) + this.dataService.token() )
      .map(response => response.json()).subscribe(resources => {
        this._storeResources.resources = resources;
        console.log('[GET Resources]', resources);
        this._resourceObserver.next(this._storeResources.resources );
      }, error => this.dataService.handleError(error) );
  }

  create(resource: Resource) {
    let body = JSON.stringify({resource: resource});
    let options = new RequestOptions({ headers: this.dataService.head() });
    this.http.post(this.resourcesUrl.slice(0, - 1) + this.dataService.token(), body, options)
      .map(response => response.json()).subscribe(resource => {
        this.router.navigate(['/resources', resource.id ]);
      }, error => this.dataService.handleError(error));
  }

  editResource(resource: Resource) {
    let body = JSON.stringify({resource: resource});
    let options = new RequestOptions({ headers: this.dataService.head() });
    this.http.put(this.resourcesUrl + resource._id + this.dataService.token(), body, options).map(response => response.json()).subscribe(resource => {
      let msg = { name: "Saved!", details: 200 };
      this.dataService.notifier(msg);
    }, error => this.dataService.handleError(error));
  }

  delete(id: String) {
    let options = new RequestOptions({ headers: this.dataService.head() });
    this.http.delete(this.resourcesUrl + id +this.dataService.token() ).map(response => response ).subscribe(resource => {
      let finder = this._storeResources.resources.indexOf(this._storeResources.resources.find(x => x._id === id));
      this._storeResources.resources.splice(finder, 1);
      this._resourceObserver.next( this._storeResources.resources );
      this.router.navigate(['/resources' ]);
    }, error => this.dataService.handleError(error));
  }

  loadItem(id) {
    this.http.get(this.resourcesUrl + id +this.dataService.token() ).map(response => response.json()).subscribe(resource => {
      this._storeResources.resource = resource;
      this._resourceObserver.next(this._storeResources.resource);
    }, error => this.dataService.handleError(error));
  }

  private extractList(res: Response) {
    let body = res.json();
    return body || [];
  }

  private extractItem(res: Response){
    let body = res.json();
    return body || {};
  }

}
