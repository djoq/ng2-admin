"use strict";
var core_1 = require("@angular/core");
var basicTables_service_1 = require("../../basicTables.service");
var HoverTable = (function () {
    function HoverTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.metricsTableData = _basicTablesService.metricsTableData;
    }
    return HoverTable;
}());
HoverTable = __decorate([
    core_1.Component({
        selector: 'hover-table',
        template: require('./hoverTable.html')
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], HoverTable);
exports.HoverTable = HoverTable;
//# sourceMappingURL=hoverTable.component.js.map