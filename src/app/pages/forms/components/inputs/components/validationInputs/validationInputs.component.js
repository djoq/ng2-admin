"use strict";
var core_1 = require("@angular/core");
var ValidationInputs = (function () {
    function ValidationInputs() {
        this.checkboxModel = [{
                name: 'Checkbox with success',
                state: false,
                class: 'has-success checkbox'
            }, {
                name: 'Checkbox with warning',
                state: false,
                class: 'has-warning checkbox',
            }, {
                name: 'Checkbox with error',
                state: false,
                class: 'has-error checkbox'
            }];
        this.checkboxPropertiesMapping = {
            model: 'state',
            value: 'name',
            label: 'name',
            baCheckboxClass: 'class'
        };
    }
    return ValidationInputs;
}());
ValidationInputs = __decorate([
    core_1.Component({
        selector: 'validation-inputs',
        template: require('./validationInputs.html'),
    }),
    __metadata("design:paramtypes", [])
], ValidationInputs);
exports.ValidationInputs = ValidationInputs;
//# sourceMappingURL=validationInputs.component.js.map