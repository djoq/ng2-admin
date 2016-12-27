"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var nga_module_1 = require("../theme/nga.module");
var trafficChart_1 = require("../pages/dashboard/trafficChart");
var stats_component_1 = require("./stats.component");
var stat_service_1 = require("./stat.service");
var trafficChart_service_1 = require("../pages/dashboard/trafficChart/trafficChart.service");
exports.routes = [
    { path: '', component: stats_component_1.StatsComponent, pathMatch: 'full' },
];
var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule.routes = exports.routes;
StatModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(exports.routes), nga_module_1.NgaModule],
        declarations: [stats_component_1.StatsComponent, trafficChart_1.TrafficChart],
        providers: [stat_service_1.StatService, trafficChart_service_1.TrafficChartService]
    }),
    __metadata("design:paramtypes", [])
], StatModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StatModule;
//# sourceMappingURL=stat.module.js.map