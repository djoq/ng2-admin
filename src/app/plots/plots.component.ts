import { Component, OnInit } from '@angular/core';
import { Plot }            from './plot';
import { Router, ActivatedRoute } from '@angular/router';
import { PlotService } from './plot.service';

declare var $:any;

@Component({
  selector: 'plots-component',
  templateUrl: './plots.component.html',
})

export class PlotsComponent implements OnInit {
  plots: any;
  search: {};
  errorMessage = "";
  sbo: any;
  rx: any;
  selectedPlot: Plot;
  addingPlot = false;
  constructor(private plotService: PlotService, private router: Router) { }

  ngOnInit() {

    this.plotService.loadItem("/assets/solution.json")
       .then( sbo => { this.sbo = sbo;
      }, error =>  this.errorMessage = <any>error);

    this.plotService.loadItem("/assets/rxtrivia.json")
       .then( rx => { this.rx = rx;
      }, error =>  this.errorMessage = <any>error);

    let self = this;
        
  }

  addPlot () {
    this.addingPlot = true;
    this.selectedPlot = null;
  }

  close() {
    this.addingPlot = false;
  }

  onSelect(plot: Plot) {
    this.selectedPlot = plot;
    this.addingPlot = false;
    // this.gotoDetail();
  }

  gotoDetail() {
    this.router.navigate(['PlotDetail', { id: this.selectedPlot._id }]);
  }

  filterUpdated(filter){
    //handle the event
    this.addingPlot = false;
    this.selectedPlot = filter;
  }
}
