"use strict";
var core_1 = require("@angular/core");
require("./ckeditor.loader.ts");
var Ckeditor = (function () {
    function Ckeditor() {
        this.ckeditorContent = '<p>Hello CKEditor</p>';
        this.config = {
            uiColor: '#F0F3F4',
            height: '600'
        };
    }
    return Ckeditor;
}());
Ckeditor = __decorate([
    core_1.Component({
        selector: 'ckeditor-component',
        encapsulation: core_1.ViewEncapsulation.None,
        template: require('./ckeditor.html'),
        styles: [require('./ckeditor.scss')]
    }),
    __metadata("design:paramtypes", [])
], Ckeditor);
exports.Ckeditor = Ckeditor;
//# sourceMappingURL=ckeditor.component.js.map