"use strict";
var core_1 = require("@angular/core");
var basicTables_service_1 = require("../../basicTables.service");
var CondensedTable = (function () {
    function CondensedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.peopleTableData = _basicTablesService.peopleTableData;
    }
    return CondensedTable;
}());
CondensedTable = __decorate([
    core_1.Component({
        selector: 'condensed-table',
        template: require('./condensedTable.html')
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], CondensedTable);
exports.CondensedTable = CondensedTable;
//# sourceMappingURL=condensedTable.component.js.map