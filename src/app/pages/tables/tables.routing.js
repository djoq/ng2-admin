"use strict";
var router_1 = require("@angular/router");
var tables_component_1 = require("./tables.component");
var basicTables_component_1 = require("./components/basicTables/basicTables.component");
// import { SmartTables } from './components/smartTables/smartTables.component';
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: tables_component_1.Tables,
        children: [
            { path: 'basictables', component: basicTables_component_1.BasicTables },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=tables.routing.js.map