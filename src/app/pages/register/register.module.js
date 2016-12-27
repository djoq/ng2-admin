"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var register_component_1 = require("./register.component");
var register_routing_1 = require("./register.routing");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            register_routing_1.routing
        ],
        declarations: [
            register_component_1.Register
        ]
    }),
    __metadata("design:paramtypes", [])
], RegisterModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterModule;
//# sourceMappingURL=register.module.js.map