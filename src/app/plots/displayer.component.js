"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Displayer = (function () {
    function Displayer(router) {
        this.router = router;
        this.filterUpdated = new core_1.EventEmitter();
        this.choice = "gross";
        this.errorMessage = null;
        this.navigated = false; // true if navigated here
    }
    Displayer.prototype.slicer = function (args) {
        var points = args[this.choice];
        return Object.keys(points).map(function (key) { return points[key]; }).slice(1);
    };
    Displayer.prototype.keyMaker = function (args) {
        return Object.keys(args).slice(1);
    };
    Displayer.prototype.instantiate = function (range) {
        var myChart = null;
        var ctx = null;
        ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.keyMaker(this.sbo.gross).slice(-range),
                datasets: [{
                        label: 'SBO ',
                        data: this.slicer(this.sbo).slice(-range),
                        backgroundColor: "#00C9FF"
                    }, {
                        label: 'RxTrivia',
                        data: this.slicer(this.rx).slice(-range),
                        backgroundColor: "#92FE9D"
                    }]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        fontSize: 18,
                        lineCap: "round",
                    }
                }
            }
        });
    };
    Displayer.prototype.onChange = function (val) {
        if (val) {
            this.choice = "gross";
        }
        else {
            this.choice = "unique";
        }
        this.instantiate(this.data_range);
    };
    Displayer.prototype.ngOnInit = function () {
        this.data_range = 15;
        console.log("received data", this.sbo);
        this.instantiate(15);
    };
    Displayer.prototype.updateRange = function (e) {
        this.myChart.destroy();
        console.log(e.target.valueAsNumber);
        this.data_range = e.target.valueAsNumber;
        this.instantiate(e.target.valueAsNumber);
    };
    Displayer.prototype.goBack = function () {
        this.router.navigate(['Dashboard']);
    };
    return Displayer;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Displayer.prototype, "sbo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Displayer.prototype, "rx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Displayer.prototype, "filterUpdated", void 0);
Displayer = __decorate([
    core_1.Component({
        selector: 'display-plot',
        templateUrl: './displayer.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Displayer);
exports.Displayer = Displayer;
//# sourceMappingURL=displayer.component.js.map