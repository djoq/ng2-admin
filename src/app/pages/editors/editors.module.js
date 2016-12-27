"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var nga_module_1 = require("../../theme/nga.module");
var editors_routing_1 = require("./editors.routing");
var editors_component_1 = require("./editors.component");
var ckeditor_component_1 = require("./components/ckeditor/ckeditor.component");
var EditorsModule = (function () {
    function EditorsModule() {
    }
    return EditorsModule;
}());
EditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            ng2_ckeditor_1.CKEditorModule,
            editors_routing_1.routing
        ],
        declarations: [
            editors_component_1.Editors,
            ckeditor_component_1.Ckeditor
        ]
    }),
    __metadata("design:paramtypes", [])
], EditorsModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditorsModule;
//# sourceMappingURL=editors.module.js.map