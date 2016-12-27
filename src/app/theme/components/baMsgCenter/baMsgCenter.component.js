"use strict";
var core_1 = require("@angular/core");
var baMsgCenter_service_1 = require("./baMsgCenter.service");
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    return BaMsgCenter;
}());
BaMsgCenter = __decorate([
    core_1.Component({
        selector: 'ba-msg-center',
        providers: [baMsgCenter_service_1.BaMsgCenterService],
        styles: [require('./baMsgCenter.scss')],
        template: require('./baMsgCenter.html')
    }),
    __metadata("design:paramtypes", [baMsgCenter_service_1.BaMsgCenterService])
], BaMsgCenter);
exports.BaMsgCenter = BaMsgCenter;
//# sourceMappingURL=baMsgCenter.component.js.map