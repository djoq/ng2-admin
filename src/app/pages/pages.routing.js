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
            { path: 'dashboard', loadChildren: function () { return System.import('./dashboard/dashboard.module'); } },
            { path: 'editors', loadChildren: function () { return System.import('./editors/editors.module'); } },
            //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
            { path: 'charts', loadChildren: function () { return System.import('./charts/charts.module'); } },
            { path: 'ui', loadChildren: function () { return System.import('./ui/ui.module'); } },
            { path: 'forms', loadChildren: function () { return System.import('./forms/forms.module'); } },
            { path: 'tables', loadChildren: function () { return System.import('./tables/tables.module'); } },
            { path: 'maps', loadChildren: function () { return System.import('./maps/maps.module'); } },
            { path: 'plots', loadChildren: function () { return System.import('../plots/plot.module'); } },
            { path: 'overview', loadChildren: function () { return System.import('../stats/stat.module'); } },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=pages.routing.js.map