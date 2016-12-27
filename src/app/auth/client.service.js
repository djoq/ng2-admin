"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var data_service_1 = require("../services/data.service");
var Observable_1 = require("rxjs/Observable");
var ClientService = (function () {
    function ClientService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.clientsUrl = '/api/users/';
        this.token = this.dataService.token();
    }
    ClientService.prototype.isLoggedIn = function () {
        return true;
    };
    ClientService.prototype.loadItem = function () {
        return this.http.get(this.clientsUrl + localStorage.getItem("id") + this.dataService.token())
            .toPromise()
            .then(this.extractItem)
            .catch(this.handleError);
    };
    ClientService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ClientService.prototype.extractList = function (res) {
        var body = res.json();
        return body || [];
    };
    ClientService.prototype.extractItem = function (res) {
        var body = res.json();
        console.log("EXTRACTION ->", res);
        return body || {};
    };
    ClientService.prototype.handleError = function (error) {
        if (error.status === 401) {
            console.log("HANDLING ERROR", error.status);
        }
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, data_service_1.DataService])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map