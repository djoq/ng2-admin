"use strict";
var core_1 = require("@angular/core");
var baChartistChart_loader_ts_1 = require("./baChartistChart.loader.ts");
var BaChartistChart = (function () {
    function BaChartistChart() {
        this.onChartReady = new core_1.EventEmitter();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new baChartistChart_loader_ts_1.Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    return BaChartistChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaChartistChart.prototype, "baChartistChartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaChartistChart.prototype, "baChartistChartClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baChartistChart'),
    __metadata("design:type", core_1.ElementRef)
], BaChartistChart.prototype, "_selector", void 0);
BaChartistChart = __decorate([
    core_1.Component({
        selector: 'ba-chartist-chart',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('chartist/dist/chartist.css'), require('./baChartistChart.scss')],
        template: require('./baChartistChart.html'),
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], BaChartistChart);
exports.BaChartistChart = BaChartistChart;
//# sourceMappingURL=baChartistChart.component.js.map