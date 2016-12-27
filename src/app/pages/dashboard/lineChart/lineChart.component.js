"use strict";
var core_1 = require("@angular/core");
var lineChart_service_1 = require("./lineChart.service");
var LineChart = (function () {
    function LineChart(_lineChartService) {
        this._lineChartService = _lineChartService;
        this.chartData = this._lineChartService.getData();
    }
    LineChart.prototype.initChart = function (chart) {
        var zoomChart = function () {
            chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
        };
        chart.addListener('rendered', zoomChart);
        zoomChart();
        if (chart.zoomChart) {
            chart.zoomChart();
        }
    };
    return LineChart;
}());
LineChart = __decorate([
    core_1.Component({
        selector: 'line-chart',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./lineChart.scss')],
        template: require('./lineChart.html')
    }),
    __metadata("design:paramtypes", [lineChart_service_1.LineChartService])
], LineChart);
exports.LineChart = LineChart;
//# sourceMappingURL=lineChart.component.js.map