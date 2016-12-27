import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { ClientsComponent } from './clients.component';
import { ClientDetailComponent } from './client-detail.component';
import { ClientCreationComponent } from './client-creation.component';
import { ClientService } from './client.service';

export const routes = [
  { path: '', component: ClientsComponent, pathMatch: 'full' },
  { path: ':id', component: ClientDetailComponent, patchMatch: 'full'},
  { path: './client-creation.component', component: ClientCreationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ ClientsComponent, ClientDetailComponent, ClientCreationComponent ],
  providers: [ ClientService ] 
})
export default class ClientModule {
  static routes = routes;
}
