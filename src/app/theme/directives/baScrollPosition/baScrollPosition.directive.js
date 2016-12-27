"use strict";
var core_1 = require("@angular/core");
var BaScrollPosition = (function () {
    function BaScrollPosition() {
        this.scrollChange = new core_1.EventEmitter();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    return BaScrollPosition;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaScrollPosition.prototype, "maxHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaScrollPosition.prototype, "scrollChange", void 0);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaScrollPosition.prototype, "onWindowScroll", null);
BaScrollPosition = __decorate([
    core_1.Directive({
        selector: '[baScrollPosition]'
    }),
    __metadata("design:paramtypes", [])
], BaScrollPosition);
exports.BaScrollPosition = BaScrollPosition;
//# sourceMappingURL=baScrollPosition.directive.js.map