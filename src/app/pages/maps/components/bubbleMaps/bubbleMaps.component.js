"use strict";
var core_1 = require("@angular/core");
var bubbleMaps_service_1 = require("./bubbleMaps.service");
var BubbleMaps = (function () {
    function BubbleMaps(_bubbleMapsService) {
        this._bubbleMapsService = _bubbleMapsService;
    }
    BubbleMaps.prototype.ngOnInit = function () {
        this.chartData = this._bubbleMapsService.getData();
    };
    return BubbleMaps;
}());
BubbleMaps = __decorate([
    core_1.Component({
        selector: 'bubble-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./bubbleMaps.scss')],
        template: require('./bubbleMaps.html'),
    }),
    __metadata("design:paramtypes", [bubbleMaps_service_1.BubbleMapsService])
], BubbleMaps);
exports.BubbleMaps = BubbleMaps;
//# sourceMappingURL=bubbleMaps.component.js.map