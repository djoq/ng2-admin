import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { DropdownComponent } from './dropdown.component';

export const routes = [
  { path: './dropdown.component', component: DropdownComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ DropdownComponent ],
  //providers: [ FilterService, DataService ] 
})
export default class DropdownModule {
  static routes = routes;
}
