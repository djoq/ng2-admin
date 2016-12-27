"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var index_1 = require("ng2-tree/index");
var components_routing_1 = require("./components.routing");
var components_component_1 = require("./components.component");
var treeView_component_1 = require("./components/treeView/treeView.component");
// TODO: tree component?
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            components_routing_1.routing
        ],
        declarations: [
            components_component_1.Components,
            treeView_component_1.TreeView,
            index_1.TreeComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], ComponentsModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentsModule;
//# sourceMappingURL=components.module.js.map