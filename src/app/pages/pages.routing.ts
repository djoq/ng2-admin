import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      { path: 'plots', loadChildren: () => System.import('../plots/plot.module') },
      { path: 'overview', loadChildren: () => System.import('../stats/stat.module') },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
