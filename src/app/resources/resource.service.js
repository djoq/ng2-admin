"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var data_service_1 = require("../services/data.service");
var Observable_1 = require("rxjs/Observable");
var ResourceService = (function () {
    function ResourceService(http, dataService, router) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.resourcesUrl = "/api/resources/";
        this._storeResources = { resources: [], resource: {} };
        this.token = this.dataService.token();
        this.resources$ = new Observable_1.Observable(function (observer) { return _this._resourceObserver = observer; }).share();
        this.jsonp_params = new http_1.URLSearchParams();
        this.jsonp_params.set('callback', 'JSONP_CALLBACK');
    }
    ResourceService.prototype.isLoggedIn = function () {
        return true;
    };
    ResourceService.prototype.loadList = function () {
        var _this = this;
        this.http.get(this.resourcesUrl.slice(0, -1) + this.dataService.token())
            .map(function (response) { return response.json(); }).subscribe(function (resources) {
            _this._storeResources.resources = resources;
            console.log('[GET Resources]', resources);
            _this._resourceObserver.next(_this._storeResources.resources);
        }, function (error) { return _this.dataService.handleError(error); });
    };
    ResourceService.prototype.create = function (resource) {
        var _this = this;
        var body = JSON.stringify({ resource: resource });
        var options = new http_1.RequestOptions({ headers: this.dataService.head() });
        this.http.post(this.resourcesUrl.slice(0, -1) + this.dataService.token(), body, options)
            .map(function (response) { return response.json(); }).subscribe(function (resource) {
            _this.router.navigate(['/resources', resource.id]);
        }, function (error) { return _this.dataService.handleError(error); });
    };
    ResourceService.prototype.editResource = function (resource) {
        var _this = this;
        var body = JSON.stringify({ resource: resource });
        var options = new http_1.RequestOptions({ headers: this.dataService.head() });
        this.http.put(this.resourcesUrl + resource._id + this.dataService.token(), body, options).map(function (response) { return response.json(); }).subscribe(function (resource) {
            var msg = { name: "Saved!", details: 200 };
            _this.dataService.notifier(msg);
        }, function (error) { return _this.dataService.handleError(error); });
    };
    ResourceService.prototype.delete = function (id) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: this.dataService.head() });
        this.http.delete(this.resourcesUrl + id + this.dataService.token()).map(function (response) { return response; }).subscribe(function (resource) {
            var finder = _this._storeResources.resources.indexOf(_this._storeResources.resources.find(function (x) { return x._id === id; }));
            _this._storeResources.resources.splice(finder, 1);
            _this._resourceObserver.next(_this._storeResources.resources);
            _this.router.navigate(['/resources']);
        }, function (error) { return _this.dataService.handleError(error); });
    };
    ResourceService.prototype.loadItem = function (id) {
        var _this = this;
        this.http.get(this.resourcesUrl + id + this.dataService.token()).map(function (response) { return response.json(); }).subscribe(function (resource) {
            _this._storeResources.resource = resource;
            _this._resourceObserver.next(_this._storeResources.resource);
        }, function (error) { return _this.dataService.handleError(error); });
    };
    ResourceService.prototype.extractList = function (res) {
        var body = res.json();
        return body || [];
    };
    ResourceService.prototype.extractItem = function (res) {
        var body = res.json();
        return body || {};
    };
    return ResourceService;
}());
ResourceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, data_service_1.DataService, router_1.Router])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map