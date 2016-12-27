import { Injectable }   from '@angular/core';
import { Http, Jsonp, URLSearchParams, RequestOptions, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable }   from 'rxjs/Observable';
import { Observer }     from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import { Data }       from './data';

declare var io;

@Injectable()
export class DataService {
  errorMessage = "";
  private headers = new Headers({
      "Content-Type": "application/json",
      "withCredentials": true,
      "Accept": "X-XSRF-TOKEN"
    });
  private jsonp_params: URLSearchParams;

  data$: Observable<Data[]>;
  private _dataObserver: Observer<Data[]>;
  private _dataStore: {
    data: Data[];
  };

  constructor (private router: Router, private jsonp: Jsonp, private http: Http) { //import { FetchComponent } from '../filters/fetch.component';
    this._dataStore = { data: [] };
    this.data$ = new Observable<Data[]>(observer =>  this._dataObserver = observer).share();
    this.jsonp_params = new URLSearchParams();
    this.jsonp_params.set('callback', 'JSONP_CALLBACK');
  }

  isLoggedIn() {
    if( !localStorage.getItem("access_token") && localStorage.getItem("email") ){
      return false;
    } else if( !localStorage.getItem("access_token")  ) {
      return false;
    } else {
      return true
    }
  }

  token(){
      return "?access_token=" + encodeURIComponent(localStorage.getItem("access_token"));
  }
  
  logOut(){
    //this.appState.set('client', {error: 'not logged in'});
    // let socket = io.connect(':8110');
    let options = new RequestOptions({ headers: this.headers });
    this.http.delete('/users/sign_out', options).map(response => response.json()).map(data => {
      // (<HTMLInputElement>document.getElementById("uuid")).value = data.uuid;
      // socket.emit('hand', data); 
      console.log('[DELETE USER SESSION]', data)
    }, error => this.handleError(error));

    if(!!localStorage.getItem("authentication_token") ){
      localStorage.removeItem("authentication_token");
      localStorage.removeItem("email");
    }
  }

  head(){
    return this.headers;
  }

  login(values: any){
    let self = this;
    // let socket = io.connect(':8110');
    // socket.emit('shake', { email: email, password: passcode, uuid: token }); 

    let options = new RequestOptions({ headers: this.headers });
    let params =  {credentials: { name: values.email, secret: values.password }};
    let body = JSON.stringify(params);
    this.http.post("/api/login", body, options).map(response => response.json()).subscribe(data => {
      console.log('[LOGIN]', data)

      //this.appState.set('client', data)
      
      localStorage.setItem("id", data.id);
      localStorage.setItem("access_token", data.access_token)
      self.router.navigate(['']);
    }, error => alert('Invalid Email or Password'));
  }

  newUser(registration) {
    let self = this;
    let options = new RequestOptions({ headers: this.headers });
    let params = {user: { email: registration.email, password: registration.password, password_confirmation: registration.password_confirmation }};
    let body = JSON.stringify(params);
    this.http.post("/users", body, options).map(response => response.json()).subscribe(data => {
      console.log('[POST USERS]', data)
      localStorage.setItem("email", data.email);
      localStorage.setItem("authentication_token", data.authentication_token)
    }, error => console.log('[Not Found] we cant reach the server:', error))
  }

  updatePassword(password,token){
    let self = this;
    let options = new RequestOptions({ headers: this.headers });
    let params = { password: password };
    let body = JSON.stringify(params);
    this.http.put("/users/password"+token, body, options).map(response => response.json()).subscribe(data => {
      self.router.navigate(['dashboard']);
    }, error => alert('Invalid Email or Password'));
  }

  resetPassword(email){
    this.http.get("/interfaces?reset_by_email="+email).map(response => response.json()).subscribe(data => {
      console.log("email password reset request sent!")
    }, error => console.log("There was an error maybe?", error ));
  }

  notifier(msg: any){
    let options = new RequestOptions({ headers: this.headers });
    let params = { handler: msg }
    let body = JSON.stringify(params);
    this.http.post('/interfaces/1/handlers' + this.token(), body, options ).map(response => response.json()).subscribe(data => {
      console.log("Handle Error Response ->", data)
      this._dataStore.data = data;
      this._dataObserver.next(this._dataStore.data);
    }, error => console.log('Failed during logging ->', error) )
  }

  handleError(err: Response | any) {

    let msg = { name: "We encountered an error", details: err.status }
    console.log(msg)
    this.notifier(msg)
  }
}
