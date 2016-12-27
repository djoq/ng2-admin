"use strict";
var core_1 = require("@angular/core");
require("./baFullCalendar.loader.ts");
var BaFullCalendar = (function () {
    function BaFullCalendar() {
        this.onCalendarReady = new core_1.EventEmitter();
    }
    BaFullCalendar.prototype.ngAfterViewInit = function () {
        var calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
        this.onCalendarReady.emit(calendar);
    };
    return BaFullCalendar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaFullCalendar.prototype, "baFullCalendarConfiguration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaFullCalendar.prototype, "baFullCalendarClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaFullCalendar.prototype, "onCalendarReady", void 0);
__decorate([
    core_1.ViewChild('baFullCalendar'),
    __metadata("design:type", core_1.ElementRef)
], BaFullCalendar.prototype, "_selector", void 0);
BaFullCalendar = __decorate([
    core_1.Component({
        selector: 'ba-full-calendar',
        template: require('./baFullCalendar.html'),
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], BaFullCalendar);
exports.BaFullCalendar = BaFullCalendar;
//# sourceMappingURL=baFullCalendar.component.js.map