"use strict";
var core_1 = require("@angular/core");
var calendar_service_1 = require("./calendar.service");
var Calendar = (function () {
    function Calendar(_calendarService) {
        var _this = this;
        this._calendarService = _calendarService;
        this.calendarConfiguration = this._calendarService.getData();
        this.calendarConfiguration.select = function (start, end) { return _this._onSelect(start, end); };
    }
    Calendar.prototype.onCalendarReady = function (calendar) {
        this._calendar = calendar;
    };
    Calendar.prototype._onSelect = function (start, end) {
        if (this._calendar != null) {
            var title = prompt('Event Title:');
            var eventData = void 0;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
            }
            jQuery(this._calendar).fullCalendar('unselect');
        }
    };
    return Calendar;
}());
Calendar = __decorate([
    core_1.Component({
        selector: 'calendar',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./calendar.scss')],
        template: require('./calendar.html')
    }),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], Calendar);
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.component.js.map