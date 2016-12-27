"use strict";
var core_1 = require("@angular/core");
var CheckboxInputs = (function () {
    function CheckboxInputs() {
        this.checkboxModel = [{
                name: 'Check 1',
                checked: false,
                class: 'col-md-4'
            }, {
                name: 'Check 2',
                checked: true,
                class: 'col-md-4'
            }, {
                name: 'Check 3',
                checked: false,
                class: 'col-md-4'
            }];
        this.checkboxPropertiesMapping = {
            model: 'checked',
            value: 'name',
            label: 'name',
            baCheckboxClass: 'class'
        };
    }
    return CheckboxInputs;
}());
CheckboxInputs = __decorate([
    core_1.Component({
        selector: 'checkbox-inputs',
        template: require('./checkboxInputs.html'),
    }),
    __metadata("design:paramtypes", [])
], CheckboxInputs);
exports.CheckboxInputs = CheckboxInputs;
//# sourceMappingURL=checkboxInputs.component.js.map