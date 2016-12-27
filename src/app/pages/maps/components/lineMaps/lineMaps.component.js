"use strict";
var core_1 = require("@angular/core");
var lineMaps_service_1 = require("./lineMaps.service");
var LineMaps = (function () {
    function LineMaps(_lineMapsService) {
        this._lineMapsService = _lineMapsService;
        this.chartData = this._lineMapsService.getData();
    }
    return LineMaps;
}());
LineMaps = __decorate([
    core_1.Component({
        selector: 'line-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./lineMaps.scss')],
        template: require('./lineMaps.html')
    }),
    __metadata("design:paramtypes", [lineMaps_service_1.LineMapsService])
], LineMaps);
exports.LineMaps = LineMaps;
//# sourceMappingURL=lineMaps.component.js.map