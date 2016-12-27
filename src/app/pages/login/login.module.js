"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var login_component_1 = require("./login.component");
var login_routing_1 = require("./login.routing");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            login_routing_1.routing
        ],
        declarations: [
            login_component_1.Login
        ]
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;
//# sourceMappingURL=login.module.js.map