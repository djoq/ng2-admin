"use strict";
var core_1 = require("@angular/core");
var InjectUnits = (function () {
    function InjectUnits() {
    }
    return InjectUnits;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InjectUnits.prototype, "val", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InjectUnits.prototype, "units", void 0);
InjectUnits = __decorate([
    core_1.Component({
        selector: 'i-u',
        template: "\n      <span *ngIf=\"units == '$'\">$</span>\n        {{ val }}\n      <span *ngIf=\"units == '%'\">%</span>\n    ",
        styles: ["\n    \n       \n    "]
    }),
    __metadata("design:paramtypes", [])
], InjectUnits);
exports.InjectUnits = InjectUnits;
//# sourceMappingURL=inject-units.component.js.map