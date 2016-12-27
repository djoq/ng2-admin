"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var data_service_1 = require("../services/data.service");
var Observable_1 = require("rxjs/Observable");
var PlotService = (function () {
    function PlotService(http, dataService, router) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.plotsUrl = "/api/plots/";
        this._storePlots = { plots: [], plot: {} };
        this.token = this.dataService.token();
        this.plots$ = new Observable_1.Observable(function (observer) { return _this._plotObserver = observer; }).share();
        this.jsonp_params = new http_1.URLSearchParams();
        this.jsonp_params.set('callback', 'JSONP_CALLBACK');
    }
    PlotService.prototype.isLoggedIn = function () {
        return true;
    };
    PlotService.prototype.loadItem = function (endpoint) {
        return this.http.get(endpoint)
            .toPromise()
            .then(this.extractItem)
            .catch(this.handleError);
    };
    PlotService.prototype.extractList = function (res) {
        var body = res.json();
        return body || [];
    };
    PlotService.prototype.extractItem = function (res) {
        var body = res.json();
        return body || {};
    };
    PlotService.prototype.handleError = function (error) {
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
    return PlotService;
}());
PlotService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, data_service_1.DataService, router_1.Router])
], PlotService);
exports.PlotService = PlotService;
//# sourceMappingURL=plot.service.js.map