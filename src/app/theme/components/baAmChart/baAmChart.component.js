"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../../theme/services");
require("./baAmChart.loader.ts");
var baAmChartTheme_service_1 = require("./baAmChartTheme.service");
var BaAmChart = (function () {
    function BaAmChart(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new core_1.EventEmitter();
        this._loadChartsLib();
    }
    BaAmChart.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    };
    BaAmChart.prototype.ngAfterViewInit = function () {
        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    };
    BaAmChart.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    return BaAmChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "baAmChartConfiguration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaAmChart.prototype, "baAmChartClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baAmChart'),
    __metadata("design:type", core_1.ElementRef)
], BaAmChart.prototype, "_selector", void 0);
BaAmChart = __decorate([
    core_1.Component({
        selector: 'ba-am-chart',
        template: require('./baAmChart.html'),
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [baAmChartTheme_service_1.BaAmChartThemeService],
    }),
    __metadata("design:paramtypes", [baAmChartTheme_service_1.BaAmChartThemeService])
], BaAmChart);
exports.BaAmChart = BaAmChart;
//# sourceMappingURL=baAmChart.component.js.map