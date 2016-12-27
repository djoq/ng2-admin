"use strict";
var core_1 = require("@angular/core");
var basicTables_service_1 = require("../../basicTables.service");
var StripedTable = (function () {
    function StripedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.smartTableData = _basicTablesService.smartTableData;
    }
    return StripedTable;
}());
StripedTable = __decorate([
    core_1.Component({
        selector: 'striped-table',
        template: require('./stripedTable.html')
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], StripedTable);
exports.StripedTable = StripedTable;
//# sourceMappingURL=stripedTable.component.js.map