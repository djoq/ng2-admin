"use strict";
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
            { path: 'ui', loadChildren: function () { return System.import('./ui/ui.module'); } },
            { path: 'plots', loadChildren: function () { return System.import('../plots/plot.module'); } },
            { path: 'overview', loadChildren: function () { return System.import('../stats/stat.module'); } },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=pages.routing.js.map