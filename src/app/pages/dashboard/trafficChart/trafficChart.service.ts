import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  calcs(stats){
    let vals = Object.keys(stats.gross).map(function(key){return parseInt(stats.gross[key]) })
    let average = (vals.reduce( (x,y) => x+y,0) / vals.length)
    let group = function(length) {
      return (vals.slice(1).slice(-length).reduce( (x,y) => x+y,0)/length)
    }
    return { 
      week: {
        current: group(7).toFixed(1),
        percent: ((group(7)-average)/average).toFixed(1)
      },
      month: {
        current: group(30).toFixed(1),
        percent: ((group(30)-average)/average).toFixed(1)
      },
      year: {
        current: group(365).toFixed(1),
        percent: ((group(365)-average)/average).toFixed(1)
      },
      today: {
        current: (vals[vals.length-1]).toFixed(1),
        percent: ((vals[vals.length-1]-average)/average).toFixed(1)
      },
      averages: average 
    };
  }
  


  getData(stats) {
    
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: this.calcs(stats).today.current,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Today',
        percentage: this.calcs(stats).today.percent,
        order: 1,
      },{
        value: this.calcs(stats).week.current,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Past 7 Days',
        percentage: this.calcs(stats).week.percent,
        order: 3,
      }, {
        value: this.calcs(stats).month.current,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Past 30 Days',
        percentage: this.calcs(stats).month.percent,
        order: 2,
      }, {
        value: this.calcs(stats).year.current,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Past Year',
        percentage: this.calcs(stats).year.percent,
        order: 0,
      },
    ];
  }
}
