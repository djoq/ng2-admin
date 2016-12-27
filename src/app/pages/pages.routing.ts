import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'plots', loadChildren: () => System.import('../plots/plot.module') },
      { path: 'overview', loadChildren: () => System.import('../stats/stat.module') },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
