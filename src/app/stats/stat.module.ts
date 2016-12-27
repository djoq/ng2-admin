import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgaModule } from '../theme/nga.module';
import { TrafficChart } from '../pages/dashboard/trafficChart';
import { StatsComponent } from './stats.component';


import { StatService } from './stat.service';
import { TrafficChartService } from '../pages/dashboard/trafficChart/trafficChart.service';

export const routes = [
  { path: '', component: StatsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes), NgaModule ],
  declarations: [ StatsComponent, TrafficChart ],
  providers: [ StatService, TrafficChartService ] 
})
export default class StatModule {
  static routes = routes;
}
