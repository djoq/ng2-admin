import {Component, Input, ViewEncapsulation, OnInit, ElementRef} from '@angular/core';

import {Chart} from './trafficChart.loader.ts';
import {TrafficChartService} from './trafficChart.service';

@Component({
  selector: 'traffic-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./trafficChart.scss')],
  template: require('./trafficChart.html')
})

// TODO: move chart.js to it's own component
export class TrafficChart {
  @Input() stats
  public doughnutData: Array<Object>;

  constructor(private trafficChartService:TrafficChartService) {
    
  }
  ngOnInit(){
    this.doughnutData = this.trafficChartService.getData(this.stats);
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0);
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
