import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
      // <ba-page-top></ba-page-top>
      // <ba-content-top></ba-content-top>

  template: `
    <ba-sidebar ></ba-sidebar>
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="">SBO</a> 2017</div>
        <ul class="al-share clearfix">
          <li><a href="https://github.com/djoq/ng2-admin"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
