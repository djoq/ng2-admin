"use strict";
var core_1 = require("@angular/core");
var BaMenuItem = (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new core_1.EventEmitter();
        this.toggleSubMenu = new core_1.EventEmitter();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    return BaMenuItem;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "menuItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaMenuItem.prototype, "child", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "itemHover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "toggleSubMenu", void 0);
BaMenuItem = __decorate([
    core_1.Component({
        selector: 'ba-menu-item',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./baMenuItem.scss')],
        template: require('./baMenuItem.html')
    }),
    __metadata("design:paramtypes", [])
], BaMenuItem);
exports.BaMenuItem = BaMenuItem;
//# sourceMappingURL=baMenuItem.component.js.map