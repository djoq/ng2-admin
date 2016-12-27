"use strict";
var core_1 = require("@angular/core");
var global_state_1 = require("../../../global.state");
var BaContentTop = (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    return BaContentTop;
}());
BaContentTop = __decorate([
    core_1.Component({
        selector: 'ba-content-top',
        styles: [require('./baContentTop.scss')],
        template: require('./baContentTop.html'),
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState])
], BaContentTop);
exports.BaContentTop = BaContentTop;
//# sourceMappingURL=baContentTop.component.js.map