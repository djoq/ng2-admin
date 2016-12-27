"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var ResourceDetailComponent = (function () {
    function ResourceDetailComponent(route, router, resourceService) {
        this.route = route;
        this.router = router;
        this.resourceService = resourceService;
        this.industries = [];
        this.departments = [];
        this.departmentEditor = false;
        this.industryEditor = false;
        this.changeIndustries = false;
        this.errorMessage = null;
        this.navigated = false; // true if navigated here
    }
    ResourceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.resourceService.loadItem(id);
            _this.resourceService.resources$.subscribe(function (resource) { return _this.resource = resource; });
        });
    };
    ResourceDetailComponent.prototype.update = function () {
        this.resourceService.editResource(this.resource);
    };
    ;
    ResourceDetailComponent.prototype.remove = function () {
        this.resourceService.delete(this.resource.id);
    };
    ResourceDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ResourceDetailComponent.prototype.addTeam = function () {
        this.router.navigate(['Teams']);
    };
    ResourceDetailComponent.prototype.addOffice = function () {
        this.router.navigate(['Offices']);
    };
    ResourceDetailComponent.prototype.teamSelect = function (team) {
        this.router.navigate(['TeamDetail', { id: team.id }]);
    };
    ResourceDetailComponent.prototype.officeSelect = function (office) {
        this.router.navigate(['OfficeDetail', { id: office.id }]);
    };
    return ResourceDetailComponent;
}());
ResourceDetailComponent = __decorate([
    core_1.Component({
        selector: 'resource-detail',
        templateUrl: './resource-detail.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        resource_service_1.ResourceService])
], ResourceDetailComponent);
exports.ResourceDetailComponent = ResourceDetailComponent;
//# sourceMappingURL=resource-detail.component.js.map