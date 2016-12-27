"use strict";
var core_1 = require("@angular/core");
require("./baSlimScroll.loader.ts");
var BaSlimScroll = (function () {
    function BaSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    BaSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    BaSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    BaSlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    };
    BaSlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    return BaSlimScroll;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
BaSlimScroll = __decorate([
    core_1.Directive({
        selector: '[baSlimScroll]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BaSlimScroll);
exports.BaSlimScroll = BaSlimScroll;
//# sourceMappingURL=baSlimScroll.directive.js.map