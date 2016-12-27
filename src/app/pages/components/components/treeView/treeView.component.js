"use strict";
var core_1 = require("@angular/core");
var TreeView = (function () {
    function TreeView() {
        this.tree = {
            value: 'Programming languages by programming paradigm',
            children: [
                {
                    value: 'Object-oriented programming',
                    children: [
                        { value: 'Java' },
                        { value: 'C++' },
                        { value: 'C#' },
                    ]
                },
                {
                    value: 'Prototype-based programming',
                    children: [
                        { value: 'JavaScript' },
                        { value: 'CoffeeScript' },
                        { value: 'Lua' },
                    ]
                }
            ]
        };
    }
    return TreeView;
}());
TreeView = __decorate([
    core_1.Component({
        selector: 'tree-view',
        template: require('./treeView.html'),
    }),
    __metadata("design:paramtypes", [])
], TreeView);
exports.TreeView = TreeView;
//# sourceMappingURL=treeView.component.js.map