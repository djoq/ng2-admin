"use strict";
var core_1 = require("@angular/core");
var Layouts = (function () {
    function Layouts() {
        this.defaultPicture = 'assets/img/theme/no-photo.png';
        this.profile = {
            picture: 'assets/img/app/profile/Nasta.png'
        };
        this.uploaderOptions = {};
    }
    Layouts.prototype.ngOnInit = function () {
    };
    return Layouts;
}());
Layouts = __decorate([
    core_1.Component({
        selector: 'layouts',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [],
        template: require('./layouts.html'),
    }),
    __metadata("design:paramtypes", [])
], Layouts);
exports.Layouts = Layouts;
//# sourceMappingURL=layouts.component.js.map