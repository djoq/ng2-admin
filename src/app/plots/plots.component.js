"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var plot_service_1 = require("./plot.service");
var PlotsComponent = (function () {
    function PlotsComponent(plotService, router) {
        this.plotService = plotService;
        this.router = router;
        this.errorMessage = "";
        this.addingPlot = false;
    }
    PlotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plotService.loadItem("/solution.json")
            .then(function (sbo) {
            _this.sbo = sbo;
        }, function (error) { return _this.errorMessage = error; });
        this.plotService.loadItem("/rxtrivia.json")
            .then(function (rx) {
            _this.rx = rx;
        }, function (error) { return _this.errorMessage = error; });
        var self = this;
    };
    PlotsComponent.prototype.addPlot = function () {
        this.addingPlot = true;
        this.selectedPlot = null;
    };
    PlotsComponent.prototype.close = function () {
        this.addingPlot = false;
    };
    PlotsComponent.prototype.onSelect = function (plot) {
        this.selectedPlot = plot;
        this.addingPlot = false;
        // this.gotoDetail();
    };
    PlotsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['PlotDetail', { id: this.selectedPlot._id }]);
    };
    PlotsComponent.prototype.filterUpdated = function (filter) {
        //handle the event
        this.addingPlot = false;
        this.selectedPlot = filter;
    };
    return PlotsComponent;
}());
PlotsComponent = __decorate([
    core_1.Component({
        selector: 'plots-component',
        templateUrl: './plots.component.html',
    }),
    __metadata("design:paramtypes", [plot_service_1.PlotService, router_1.Router])
], PlotsComponent);
exports.PlotsComponent = PlotsComponent;
//# sourceMappingURL=plots.component.js.map