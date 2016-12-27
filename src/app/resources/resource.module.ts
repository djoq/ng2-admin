import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgaModule } from '../theme/nga.module';

import { ResourcesComponent } from './resources.component';
import { ResourceDetailComponent } from './resource-detail.component';
import { ResourceCreationComponent } from './resource-creation.component';
import { ResourceService } from './resource.service';

export const routes = [
  { path: '', component: ResourcesComponent, pathMatch: 'full' },
  { path: ':id', component: ResourceDetailComponent, patchMatch: 'full'},
  { path: './resource-creation.component', component: ResourceCreationComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes), NgaModule ],
  declarations: [ ResourcesComponent, ResourceDetailComponent, ResourceCreationComponent ],
  providers: [ ResourceService ] 
})
export default class ResourceModule {
  static routes = routes;
}
