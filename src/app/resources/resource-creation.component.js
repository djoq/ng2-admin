"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var ResourceCreationComponent = (function () {
    function ResourceCreationComponent(resourceService, router) {
        this.resourceService = resourceService;
        this.router = router;
        this.resource = {};
        this.errorMessage = null;
        this.navigated = false; // true if navigated here
    }
    ResourceCreationComponent.prototype.ngOnInit = function () {
        this.resource.html = "resource";
    };
    ResourceCreationComponent.prototype.create = function () {
        this.resourceService.create(this.resource);
    };
    ;
    ResourceCreationComponent.prototype.goBack = function () {
        this.router.navigate(['Dashboard']);
    };
    return ResourceCreationComponent;
}());
ResourceCreationComponent = __decorate([
    core_1.Component({
        selector: 'resource-creation',
        templateUrl: './resource-creation.component.html',
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService,
        router_1.Router])
], ResourceCreationComponent);
exports.ResourceCreationComponent = ResourceCreationComponent;
//# sourceMappingURL=resource-creation.component.js.map