"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BaCheckbox = (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) { };
    BaCheckbox.prototype.onTouch = function (value) { };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    return BaCheckbox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaCheckbox.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "baCheckboxClass", void 0);
BaCheckbox = __decorate([
    core_1.Component({
        selector: 'ba-checkbox[ngModel]',
        styles: [require('./baCheckbox.scss')],
        template: require('./baCheckbox.html')
    }),
    __param(0, core_1.Self()),
    __metadata("design:paramtypes", [forms_1.NgModel])
], BaCheckbox);
exports.BaCheckbox = BaCheckbox;
//# sourceMappingURL=baCheckbox.component.js.map