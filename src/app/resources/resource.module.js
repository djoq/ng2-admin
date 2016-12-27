"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var nga_module_1 = require("../theme/nga.module");
var resources_component_1 = require("./resources.component");
var resource_detail_component_1 = require("./resource-detail.component");
var resource_creation_component_1 = require("./resource-creation.component");
var resource_service_1 = require("./resource.service");
exports.routes = [
    { path: '', component: resources_component_1.ResourcesComponent, pathMatch: 'full' },
    { path: ':id', component: resource_detail_component_1.ResourceDetailComponent, patchMatch: 'full' },
    { path: './resource-creation.component', component: resource_creation_component_1.ResourceCreationComponent, pathMatch: 'full' },
];
var ResourceModule = (function () {
    function ResourceModule() {
    }
    return ResourceModule;
}());
ResourceModule.routes = exports.routes;
ResourceModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(exports.routes), nga_module_1.NgaModule],
        declarations: [resources_component_1.ResourcesComponent, resource_detail_component_1.ResourceDetailComponent, resource_creation_component_1.ResourceCreationComponent],
        providers: [resource_service_1.ResourceService]
    }),
    __metadata("design:paramtypes", [])
], ResourceModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ResourceModule;
//# sourceMappingURL=resource.module.js.map