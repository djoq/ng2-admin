"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var clients_component_1 = require("./clients.component");
var client_detail_component_1 = require("./client-detail.component");
var client_creation_component_1 = require("./client-creation.component");
var client_service_1 = require("./client.service");
exports.routes = [
    { path: '', component: clients_component_1.ClientsComponent, pathMatch: 'full' },
    { path: ':id', component: client_detail_component_1.ClientDetailComponent, patchMatch: 'full' },
    { path: './client-creation.component', component: client_creation_component_1.ClientCreationComponent, pathMatch: 'full' }
];
var ClientModule = (function () {
    function ClientModule() {
    }
    return ClientModule;
}());
ClientModule.routes = exports.routes;
ClientModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes), forms_1.FormsModule],
        declarations: [clients_component_1.ClientsComponent, client_detail_component_1.ClientDetailComponent, client_creation_component_1.ClientCreationComponent],
        providers: [client_service_1.ClientService]
    }),
    __metadata("design:paramtypes", [])
], ClientModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClientModule;
//# sourceMappingURL=client.module.js.map