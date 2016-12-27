import { Component, OnInit } from '@angular/core';
import { Stat }            from './stat';
import { Router, ActivatedRoute } from '@angular/router';
import { StatService } from './stat.service';

@Component({
  selector: 'stats-component',
  templateUrl: './stats.component.html',
})

export class StatsComponent implements OnInit {
  stats: any;
  search: {};
  errorMessage = "";

  selectedStat: Stat;
  addingStat = false;
  constructor(private statService: StatService, private router: Router) { }

  ngOnInit() {
    let self = this;

    this.statService.loadItem("/solution.json")
       .then(stats => { 
         this.stats = stats;
      }, error =>  this.errorMessage = <any>error);
  }

  addStat () {
    this.addingStat = true;
    this.selectedStat = null;
  }

  close() {
    this.addingStat = false;
  }

  onSelect(stat: Stat) {
    this.selectedStat = stat;
    this.addingStat = false;
    // this.gotoDetail();
  }

  gotoDetail() {
    this.router.navigate(['StatDetail', { id: this.selectedStat._id }]);
  }

  filterUpdated(filter){
    //handle the event
    this.addingStat = false;
    this.selectedStat = filter;
  }
}
