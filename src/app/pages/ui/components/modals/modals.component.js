"use strict";
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var Modals = (function () {
    function Modals() {
    }
    Modals.prototype.showChildModal = function () {
        this.childModal.show();
    };
    Modals.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return Modals;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], Modals.prototype, "childModal", void 0);
Modals = __decorate([
    core_1.Component({
        selector: 'modals',
        styles: [require('./modals.scss')],
        template: require('./modals.html')
    }),
    __metadata("design:paramtypes", [])
], Modals);
exports.Modals = Modals;
//# sourceMappingURL=modals.component.js.map