import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService }     from './data.service';
import { Data }       from './data';

declare var $:any;

@Component({
  selector: 'data-display',
  templateUrl: './data.layout.html' //,
})

export class DataComponent implements OnInit {
  @Input() config;
  @Output() pigeonCarrier = new EventEmitter();
  statusMessage: any;
  test: any = {};
  status: any;
  navigated = false; // true if navigated here

  constructor(
    private dataService: DataService) {}

  ngOnInit() {
    $('#saver').hide();
    this.dataService.data$
      .subscribe(data => {
        
          this.statusMessage = data;
          if(this.statusMessage && this.statusMessage.details.includes('20')){
            $('#saver').show();
            console.log("status sent!", this.statusMessage)
            $('#saver').fadeOut(4300); 
          }
              
      }, error =>  this.statusMessage = <any>error);
  }

}
