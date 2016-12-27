"use strict";
var core_1 = require("@angular/core");
var DropdownPipe = (function () {
    function DropdownPipe() {
    }
    DropdownPipe.prototype.transform = function (selected, complete) {
        var _loop_1 = function (i) {
            var trash = selected.find(function (x) { return x.id === complete[i]["id"]; });
            if (!!trash)
                delete complete[i];
        };
        for (var i = 0; i < complete.length; i++) {
            _loop_1(i);
        }
        console.log("complete ->", complete);
        return complete;
    };
    return DropdownPipe;
}());
DropdownPipe = __decorate([
    core_1.Pipe({
        name: 'dropdown',
        pure: true
    }),
    __metadata("design:paramtypes", [])
], DropdownPipe);
exports.DropdownPipe = DropdownPipe;
//# sourceMappingURL=dropdown.pipe.js.map