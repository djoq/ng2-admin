"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var data_component_1 = require("./data.component");
exports.routes = [
    { path: './data-display', component: data_component_1.DataComponent, pathMatch: 'full' }
];
var DataModule = (function () {
    function DataModule() {
    }
    return DataModule;
}());
DataModule.routes = exports.routes;
DataModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes), forms_1.FormsModule],
        declarations: [data_component_1.DataComponent]
    }),
    __metadata("design:paramtypes", [])
], DataModule);
exports.DataModule = DataModule;
//# sourceMappingURL=data.module.js.map