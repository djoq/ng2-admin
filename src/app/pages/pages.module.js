"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pages_routing_1 = require("./pages.routing");
var nga_module_1 = require("../theme/nga.module");
var pages_component_1 = require("./pages.component");
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, nga_module_1.NgaModule, pages_routing_1.routing],
        declarations: [pages_component_1.Pages]
    }),
    __metadata("design:paramtypes", [])
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map