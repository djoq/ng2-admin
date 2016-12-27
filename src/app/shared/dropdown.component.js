"use strict";
var core_1 = require("@angular/core");
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.filterUpdated = new core_1.EventEmitter();
        this.errorMessage = null;
        this.navigated = false; // true if navigated here
        // this.filterUpdated.emit("update the lists");
    }
    DropdownComponent.prototype.mapper = function (a, b) {
        var bIds = {};
        a.forEach(function (obj) {
            bIds[obj.id] = obj;
        });
        // return Object.keys(bIds)
        return b.filter(function (obj) {
            return !(obj.id in bIds);
        });
    };
    DropdownComponent.prototype.sort = function (obj) {
        obj.sort(function (a, b) {
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0; //default return value (no sorting)
        });
        return obj;
    };
    DropdownComponent.prototype.dropItem = function (arr, index) {
        this.available.push(arr[index]);
        arr.splice(index, 1);
    };
    DropdownComponent.prototype.add = function (arr, index) {
        this.selected.push(arr[index]);
        arr.splice(index, 1);
    };
    DropdownComponent.prototype.populate = function (args) {
        console.log("array length ->", args.length);
        if (args.length > 0) {
            for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                var arg = args_1[_i];
                this.selected.push(arg);
            }
        }
        this.available = [];
    };
    DropdownComponent.prototype.ngOnInit = function () {
        this.available = this.mapper(this.selected, this.available);
    };
    return DropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "info", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "available", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "filterUpdated", void 0);
DropdownComponent = __decorate([
    core_1.Component({
        selector: 'dropdown-component',
        templateUrl: './dropdown.component.html',
        styleUrls: ['./dropdown.component.css']
    }),
    __metadata("design:paramtypes", [])
], DropdownComponent);
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map