"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var ResourcesComponent = (function () {
    function ResourcesComponent(resourceService, router) {
        this.resourceService = resourceService;
        this.router = router;
        this.errorMessage = "";
        this.addingResource = false;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // Search and Filter options
        this.search = {
            endpoint: "/interfaces/1/resources/",
            previews: ["name"],
            options: [
                { label: "Departments", key: "departments", url: "departments" }
            ]
        };
        this.resourceService.loadList();
        this.resourceService.resources$
            .subscribe(function (resources) { return _this.resources = resources; }, function (error) { return _this.errorMessage = error; });
    };
    ResourcesComponent.prototype.addResource = function () {
        this.addingResource = true;
        this.selectedResource = null;
    };
    ResourcesComponent.prototype.close = function () {
        this.addingResource = false;
    };
    ResourcesComponent.prototype.onSelect = function (resource) {
        this.selectedResource = resource;
        this.addingResource = false;
        // this.gotoDetail();
    };
    ResourcesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['ResourceDetail', { id: this.selectedResource._id }]);
    };
    ResourcesComponent.prototype.filterUpdated = function (filter) {
        //handle the event
        this.addingResource = false;
        this.selectedResource = filter;
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    core_1.Component({
        selector: 'resources-component',
        templateUrl: './resources.component.html',
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService, router_1.Router])
], ResourcesComponent);
exports.ResourcesComponent = ResourcesComponent;
//# sourceMappingURL=resources.component.js.map