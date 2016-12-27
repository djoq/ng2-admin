"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var dropdown_component_1 = require("./dropdown.component");
exports.routes = [
    { path: './dropdown.component', component: dropdown_component_1.DropdownComponent, pathMatch: 'full' }
];
var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule.routes = exports.routes;
DropdownModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes), forms_1.FormsModule],
        declarations: [dropdown_component_1.DropdownComponent],
    }),
    __metadata("design:paramtypes", [])
], DropdownModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DropdownModule;
//# sourceMappingURL=dropdown.module.js.map