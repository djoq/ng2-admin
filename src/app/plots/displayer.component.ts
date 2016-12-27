import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


declare var $:any;

@Component({
  selector: 'display-plot',
  templateUrl: './displayer.component.html',
})

export class Displayer implements OnInit {
  @Input() sbo
  @Input() rx
  data_range: number;
  myChart: any;
  @Output() filterUpdated = new EventEmitter();

  choice: string = "gross"
  industries: any;
  errorMessage = null;

  navigated = false; // true if navigated here
  constructor(
    private router: Router) {
  }

  slicer(args){
    let points = args[this.choice]
    return Object.keys(points).map(function(key){return points[key]}).slice(1);
  }

  keyMaker(args){
    return  Object.keys(args).slice(1);
  }


  instantiate(range){
    var ctx = (<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.keyMaker(this.sbo.gross).slice(-range),
        datasets: [{
          label: 'SBO ',
          data: this.slicer(this.sbo).slice(-range),
          backgroundColor: "#00C9FF"
        }, {
          label: 'RxTrivia',
          data: this.slicer(this.rx).slice(-range),
          backgroundColor: "#92FE9D"
        }]
      },
      options: {
        legend: {
          display: true,
          labels: {
            usePointStyle: true,
            fontSize: 18,
            lineCap: "round",
          }
        }
      }
    })
  }

  onChange(val){
    this.myChart.destroy();
    if(val){
      this.choice = "gross"
    } else {
      this.choice = "unique"
    }
    this.instantiate(this.data_range)
  }

  ngOnInit() {
    this.data_range = 15;
    console.log("received data", this.sbo)
    this.instantiate(15);
  }

  updateRange(e){
    this.myChart.destroy();
    console.log(e.target.valueAsNumber)
    this.data_range = e.target.valueAsNumber;
    this.instantiate(e.target.valueAsNumber);
  }

  goBack() {
    this.router.navigate(['Dashboard']);
  }
}
