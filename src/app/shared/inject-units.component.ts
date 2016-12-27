import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'i-u',
    template: `
      <span *ngIf="units == '$'">$</span>
        {{ val }}
      <span *ngIf="units == '%'">%</span>
    `,
    styles: [`
    
       
    `]
})
export class InjectUnits {
  @Input() val;
  @Input() units;


}
