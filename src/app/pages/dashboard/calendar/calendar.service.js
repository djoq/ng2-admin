"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var CalendarService = (function () {
    function CalendarService(_baConfig) {
        this._baConfig = _baConfig;
    }
    CalendarService.prototype.getData = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        return {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-03-08',
            selectable: true,
            selectHelper: true,
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-03-01',
                    color: dashboardColors.silverTree
                },
                {
                    title: 'Long Event',
                    start: '2016-03-07',
                    end: '2016-03-10',
                    color: dashboardColors.blueStone
                },
                {
                    title: 'Dinner',
                    start: '2016-03-14T20:00:00',
                    color: dashboardColors.surfieGreen
                },
                {
                    title: 'Birthday Party',
                    start: '2016-04-01T07:00:00',
                    color: dashboardColors.gossip
                }
            ]
        };
    };
    return CalendarService;
}());
CalendarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], CalendarService);
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map