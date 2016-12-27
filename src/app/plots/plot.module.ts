import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgaModule } from '../theme/nga.module';

import { PlotsComponent } from './plots.component';

import { PlotService } from './plot.service';
import { Displayer } from './displayer.component';

export const routes = [
  { path: '', component: PlotsComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes), NgaModule ],
  declarations: [ PlotsComponent, Displayer ],
  providers: [ PlotService ] 
})
export default class PlotModule {
  static routes = routes;
}
