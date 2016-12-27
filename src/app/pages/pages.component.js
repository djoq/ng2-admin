"use strict";
var core_1 = require("@angular/core");
var Pages = (function () {
    function Pages() {
    }
    Pages.prototype.ngOnInit = function () {
    };
    return Pages;
}());
Pages = __decorate([
    core_1.Component({
        selector: 'pages',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [],
        // <ba-page-top></ba-page-top>
        // <ba-content-top></ba-content-top>
        template: "\n    <ba-sidebar ></ba-sidebar>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\">Created with <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; <a href=\"\">SBO</a> 2017</div>\n        <ul class=\"al-share clearfix\">\n          <li><a href=\"https://github.com/djoq/ng2-admin\"><i class=\"socicon socicon-github\"></i></a></li>\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
    }),
    __metadata("design:paramtypes", [])
], Pages);
exports.Pages = Pages;
//# sourceMappingURL=pages.component.js.map