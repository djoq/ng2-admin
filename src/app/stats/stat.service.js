"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var data_service_1 = require("../services/data.service");
var Observable_1 = require("rxjs/Observable");
var StatService = (function () {
    function StatService(http, dataService, router) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.statsUrl = "/api/stats/";
        this._storeStats = { stats: [], stat: {} };
        this.token = this.dataService.token();
        this.stats$ = new Observable_1.Observable(function (observer) { return _this._statObserver = observer; }).share();
        this.jsonp_params = new http_1.URLSearchParams();
        this.jsonp_params.set('callback', 'JSONP_CALLBACK');
    }
    StatService.prototype.isLoggedIn = function () {
        return true;
    };
    StatService.prototype.loadItem = function (endpoint) {
        return this.http.get(endpoint)
            .toPromise()
            .then(this.extractItem)
            .catch(this.handleError);
    };
    StatService.prototype.extractList = function (res) {
        var body = res.json();
        return body || [];
    };
    StatService.prototype.extractItem = function (res) {
        var body = res.json();
        return body || {};
    };
    StatService.prototype.handleError = function (error) {
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
    return StatService;
}());
StatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, data_service_1.DataService, router_1.Router])
], StatService);
exports.StatService = StatService;
//# sourceMappingURL=stat.service.js.map