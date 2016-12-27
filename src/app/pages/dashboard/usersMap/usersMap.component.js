"use strict";
var core_1 = require("@angular/core");
var usersMap_service_1 = require("./usersMap.service");
var UsersMap = (function () {
    function UsersMap(_usersMapService) {
        this._usersMapService = _usersMapService;
        this.mapData = this._usersMapService.getData();
    }
    return UsersMap;
}());
UsersMap = __decorate([
    core_1.Component({
        selector: 'users-map',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./usersMap.scss')],
        template: require('./usersMap.html')
    }),
    __metadata("design:paramtypes", [usersMap_service_1.UsersMapService])
], UsersMap);
exports.UsersMap = UsersMap;
//# sourceMappingURL=usersMap.component.js.map