"use strict";
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var DataComponent = (function () {
    function DataComponent(dataService) {
        this.dataService = dataService;
        this.pigeonCarrier = new core_1.EventEmitter();
        this.test = {};
        this.navigated = false; // true if navigated here
    }
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#saver').hide();
        this.dataService.data$
            .subscribe(function (data) {
            _this.statusMessage = data;
            if (_this.statusMessage && _this.statusMessage.details.includes('20')) {
                $('#saver').show();
                console.log("status sent!", _this.statusMessage);
                $('#saver').fadeOut(4300);
            }
        }, function (error) { return _this.statusMessage = error; });
    };
    return DataComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataComponent.prototype, "config", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DataComponent.prototype, "pigeonCarrier", void 0);
DataComponent = __decorate([
    core_1.Component({
        selector: 'data-display',
        templateUrl: './data.layout.html' //,
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], DataComponent);
exports.DataComponent = DataComponent;
//# sourceMappingURL=data.component.js.map