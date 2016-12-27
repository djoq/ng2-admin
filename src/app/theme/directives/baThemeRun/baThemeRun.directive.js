"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var BaThemeRun = (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (theme_1.isMobile()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    return BaThemeRun;
}());
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", String)
], BaThemeRun.prototype, "classesString", void 0);
BaThemeRun = __decorate([
    core_1.Directive({
        selector: '[baThemeRun]'
    }),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], BaThemeRun);
exports.BaThemeRun = BaThemeRun;
//# sourceMappingURL=baThemeRun.directive.js.map