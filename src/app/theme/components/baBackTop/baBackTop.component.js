"use strict";
var core_1 = require("@angular/core");
var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BaBackTop;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "showSpeed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "moveSpeed", void 0);
__decorate([
    core_1.ViewChild('baBackTop'),
    __metadata("design:type", core_1.ElementRef)
], BaBackTop.prototype, "_selector", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BaBackTop.prototype, "_onClick", null);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaBackTop.prototype, "_onWindowScroll", null);
BaBackTop = __decorate([
    core_1.Component({
        selector: 'ba-back-top',
        styles: [require('./baBackTop.scss')],
        template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
    }),
    __metadata("design:paramtypes", [])
], BaBackTop);
exports.BaBackTop = BaBackTop;
//# sourceMappingURL=baBackTop.component.js.map