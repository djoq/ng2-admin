import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AwesomePipe }         from './awesome.pipe';
import { FetchComponent } from './fetch.component';
import { DropdownComponent } from './dropdown.component'
import { UiSwitch } from './ui-switch.component';
import { LoadTyde } from './load-tyde.component';
import { InjectUnits } from './inject-units.component';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ DropdownComponent, UiSwitch, LoadTyde, InjectUnits ],
  exports:      [ DropdownComponent, UiSwitch, LoadTyde, InjectUnits,
                  CommonModule, FormsModule ]
})
export class SharedModule { }
