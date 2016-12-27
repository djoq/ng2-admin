import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { DataComponent } from './data.component';

export const routes = [
  { path: './data-display', component: DataComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes),  FormsModule ],
  declarations: [ DataComponent ]
})
export class DataModule {
  static routes = routes;
}
