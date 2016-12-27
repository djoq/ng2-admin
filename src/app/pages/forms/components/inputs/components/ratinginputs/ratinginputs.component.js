"use strict";
var core_1 = require("@angular/core");
var Rating = (function () {
    function Rating() {
        this._rate1 = 3;
        this._rate2 = 4;
        this._max1 = 5;
        this._max2 = 10;
    }
    return Rating;
}());
Rating = __decorate([
    core_1.Component({
        selector: 'rating-inputs',
        template: require('./ratinginputs.html')
    }),
    __metadata("design:paramtypes", [])
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=ratinginputs.component.js.map