"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var nga_module_1 = require("../theme/nga.module");
var plots_component_1 = require("./plots.component");
var plot_service_1 = require("./plot.service");
var displayer_component_1 = require("./displayer.component");
exports.routes = [
    { path: '', component: plots_component_1.PlotsComponent, pathMatch: 'full' },
];
var PlotModule = (function () {
    function PlotModule() {
    }
    return PlotModule;
}());
PlotModule.routes = exports.routes;
PlotModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(exports.routes), nga_module_1.NgaModule],
        declarations: [plots_component_1.PlotsComponent, displayer_component_1.Displayer],
        providers: [plot_service_1.PlotService]
    }),
    __metadata("design:paramtypes", [])
], PlotModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlotModule;
//# sourceMappingURL=plot.module.js.map