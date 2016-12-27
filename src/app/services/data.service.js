"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
var DataService = (function () {
    function DataService(router, jsonp, http) {
        var _this = this;
        this.router = router;
        this.jsonp = jsonp;
        this.http = http;
        this.errorMessage = "";
        this.headers = new http_1.Headers({
            "Content-Type": "application/json",
            "withCredentials": true,
            "Accept": "X-XSRF-TOKEN"
        });
        this._dataStore = { data: [] };
        this.data$ = new Observable_1.Observable(function (observer) { return _this._dataObserver = observer; }).share();
        this.jsonp_params = new http_1.URLSearchParams();
        this.jsonp_params.set('callback', 'JSONP_CALLBACK');
    }
    DataService.prototype.isLoggedIn = function () {
        if (!localStorage.getItem("access_token") && localStorage.getItem("email")) {
            return false;
        }
        else if (!localStorage.getItem("access_token")) {
            return false;
        }
        else {
            return true;
        }
    };
    DataService.prototype.token = function () {
        return "?access_token=" + encodeURIComponent(localStorage.getItem("access_token"));
    };
    DataService.prototype.logOut = function () {
        var _this = this;
        //this.appState.set('client', {error: 'not logged in'});
        // let socket = io.connect(':8110');
        var options = new http_1.RequestOptions({ headers: this.headers });
        this.http.delete('/users/sign_out', options).map(function (response) { return response.json(); }).map(function (data) {
            // (<HTMLInputElement>document.getElementById("uuid")).value = data.uuid;
            // socket.emit('hand', data); 
            console.log('[DELETE USER SESSION]', data);
        }, function (error) { return _this.handleError(error); });
        if (!!localStorage.getItem("authentication_token")) {
            localStorage.removeItem("authentication_token");
            localStorage.removeItem("email");
        }
    };
    DataService.prototype.head = function () {
        return this.headers;
    };
    DataService.prototype.login = function (values) {
        var self = this;
        // let socket = io.connect(':8110');
        // socket.emit('shake', { email: email, password: passcode, uuid: token }); 
        var options = new http_1.RequestOptions({ headers: this.headers });
        var params = { credentials: { name: values.email, secret: values.password } };
        var body = JSON.stringify(params);
        this.http.post("/api/login", body, options).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log('[LOGIN]', data);
            //this.appState.set('client', data)
            localStorage.setItem("id", data.id);
            localStorage.setItem("access_token", data.access_token);
            self.router.navigate(['']);
        }, function (error) { return alert('Invalid Email or Password'); });
    };
    DataService.prototype.newUser = function (registration) {
        var self = this;
        var options = new http_1.RequestOptions({ headers: this.headers });
        var params = { user: { email: registration.email, password: registration.password, password_confirmation: registration.password_confirmation } };
        var body = JSON.stringify(params);
        this.http.post("/users", body, options).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log('[POST USERS]', data);
            localStorage.setItem("email", data.email);
            localStorage.setItem("authentication_token", data.authentication_token);
        }, function (error) { return console.log('[Not Found] we cant reach the server:', error); });
    };
    DataService.prototype.updatePassword = function (password, token) {
        var self = this;
        var options = new http_1.RequestOptions({ headers: this.headers });
        var params = { password: password };
        var body = JSON.stringify(params);
        this.http.put("/users/password" + token, body, options).map(function (response) { return response.json(); }).subscribe(function (data) {
            self.router.navigate(['dashboard']);
        }, function (error) { return alert('Invalid Email or Password'); });
    };
    DataService.prototype.resetPassword = function (email) {
        this.http.get("/interfaces?reset_by_email=" + email).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log("email password reset request sent!");
        }, function (error) { return console.log("There was an error maybe?", error); });
    };
    DataService.prototype.notifier = function (msg) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: this.headers });
        var params = { handler: msg };
        var body = JSON.stringify(params);
        this.http.post('/interfaces/1/handlers' + this.token(), body, options).map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log("Handle Error Response ->", data);
            _this._dataStore.data = data;
            _this._dataObserver.next(_this._dataStore.data);
        }, function (error) { return console.log('Failed during logging ->', error); });
    };
    DataService.prototype.handleError = function (err) {
        var msg = { name: "We encountered an error", details: err.status };
        console.log(msg);
        this.notifier(msg);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Jsonp, http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map