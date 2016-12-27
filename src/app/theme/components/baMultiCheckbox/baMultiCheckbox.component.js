"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BaMultiCheckbox = (function () {
    function BaMultiCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaMultiCheckbox.prototype.getProp = function (item, propName) {
        var prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    };
    BaMultiCheckbox.prototype.onChange = function (value) { };
    BaMultiCheckbox.prototype.onTouch = function (value) { };
    BaMultiCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaMultiCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    return BaMultiCheckbox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaMultiCheckbox.prototype, "propertiesMapping", void 0);
BaMultiCheckbox = __decorate([
    core_1.Component({
        selector: 'ba-multi-checkbox[ngModel]',
        template: require('./baMultiCheckbox.html'),
    }),
    __param(0, core_1.Self()),
    __metadata("design:paramtypes", [forms_1.NgModel])
], BaMultiCheckbox);
exports.BaMultiCheckbox = BaMultiCheckbox;
//# sourceMappingURL=baMultiCheckbox.component.js.map