"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var stat_service_1 = require("./stat.service");
var StatsComponent = (function () {
    function StatsComponent(statService, router) {
        this.statService = statService;
        this.router = router;
        this.errorMessage = "";
        this.addingStat = false;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.statService.loadItem("/solution.json")
            .then(function (stats) {
            _this.stats = stats;
        }, function (error) { return _this.errorMessage = error; });
    };
    StatsComponent.prototype.addStat = function () {
        this.addingStat = true;
        this.selectedStat = null;
    };
    StatsComponent.prototype.close = function () {
        this.addingStat = false;
    };
    StatsComponent.prototype.onSelect = function (stat) {
        this.selectedStat = stat;
        this.addingStat = false;
        // this.gotoDetail();
    };
    StatsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['StatDetail', { id: this.selectedStat._id }]);
    };
    StatsComponent.prototype.filterUpdated = function (filter) {
        //handle the event
        this.addingStat = false;
        this.selectedStat = filter;
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    core_1.Component({
        selector: 'stats-component',
        templateUrl: './stats.component.html',
    }),
    __metadata("design:paramtypes", [stat_service_1.StatService, router_1.Router])
], StatsComponent);
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map