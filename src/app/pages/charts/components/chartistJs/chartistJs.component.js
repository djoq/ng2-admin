"use strict";
var core_1 = require("@angular/core");
var chartistJs_service_1 = require("./chartistJs.service");
var ChartistJs = (function () {
    function ChartistJs(_chartistJsService) {
        this._chartistJsService = _chartistJsService;
    }
    ChartistJs.prototype.ngOnInit = function () {
        this.data = this._chartistJsService.getAll();
    };
    ChartistJs.prototype.getResponsive = function (padding, offset) {
        return this._chartistJsService.getResponsive(padding, offset);
    };
    return ChartistJs;
}());
ChartistJs = __decorate([
    core_1.Component({
        selector: 'chartist-js',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('chartist/dist/chartist.css'), require('./chartistJs.scss')],
        template: require('./chartistJs.html'),
    }),
    __metadata("design:paramtypes", [chartistJs_service_1.ChartistJsService])
], ChartistJs);
exports.ChartistJs = ChartistJs;
//# sourceMappingURL=chartistJs.component.js.map