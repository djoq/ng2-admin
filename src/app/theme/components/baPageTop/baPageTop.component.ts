import {Component, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    this.router.navigate(['/login'])

  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
