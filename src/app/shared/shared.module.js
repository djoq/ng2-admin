"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var dropdown_component_1 = require("./dropdown.component");
var ui_switch_component_1 = require("./ui-switch.component");
var load_tyde_component_1 = require("./load-tyde.component");
var inject_units_component_1 = require("./inject-units.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [dropdown_component_1.DropdownComponent, ui_switch_component_1.UiSwitch, load_tyde_component_1.LoadTyde, inject_units_component_1.InjectUnits],
        exports: [dropdown_component_1.DropdownComponent, ui_switch_component_1.UiSwitch, load_tyde_component_1.LoadTyde, inject_units_component_1.InjectUnits,
            common_1.CommonModule, forms_1.FormsModule]
    }),
    __metadata("design:paramtypes", [])
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map