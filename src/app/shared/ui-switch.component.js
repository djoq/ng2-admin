"use strict";
var core_1 = require("@angular/core");
var UiSwitch = (function () {
    function UiSwitch() {
        this.checked = false;
        this.disabled = false;
        this.size = 'medium';
        this.change = new core_1.EventEmitter();
        this.color = 'rgb(100, 189, 99)';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    UiSwitch.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
    };
    return UiSwitch;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UiSwitch.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UiSwitch.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UiSwitch.prototype, "size", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UiSwitch.prototype, "change", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UiSwitch.prototype, "color", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitch.prototype, "onToggle", null);
UiSwitch = __decorate([
    core_1.Component({
        selector: 'ui-switch',
        template: "\n        <span class=\"switch\" \n        [class.checked]=\"checked\" \n        [class.disabled]=\"disabled\"\n        [class.switch-large]=\"size === 'large'\"\n        [class.switch-medium]=\"size === 'medium'\"\n        [class.switch-small]=\"size === 'small'\"\n        [style.background-color]=\"checked ? color : defaultBgColor\"\n        [style.border-color]=\"checked ? color : defaultBoColor\"\n        >\n            <small></small>\n        </span>\n    ",
        styles: ["\n        .switch {\n            margin-top: 3px;\n            background: #fff;\n            border: 1px solid #dfdfdf;\n            position: relative;\n            display: inline-block;\n            box-sizing: content-box;\n            overflow: visible;\n            padding: 0;         \n            cursor: pointer;\n            box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n            transition: 0.3s ease-out all;\n            -webkit-transition: 0.3s ease-out all;\n        }        \n                \n        small {\n            background: #fff;\n            border-radius: 100%;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: 0.3s ease-out all;\n            -webkit-transition: 0.3s ease-out all;\n        }\n        \n        .switch-large {\n            width: 66px;\n            height: 40px;\n            border-radius: 40px;\n        }\n        .switch-large small {\n            width: 40px;\n            height: 40px;\n        }\n        \n        .switch-medium {\n            width: 50px;\n            height: 30px;\n            border-radius: 30px;\n        }\n        \n        .switch-medium small {\n            width: 30px;\n            height: 30px;\n        }\n        \n        .switch-small {\n            width: 33px;\n            height: 20px;\n            border-radius: 20px;\n        }\n        \n        .switch-small small {\n            width: 20px;\n            height: 20px;\n        }\n        \n        .checked {\n            background: rgb(100, 189, 99);\n            border-color: rgb(100, 189, 99);\n        }\n        \n        .switch-large.checked small {\n            left: 26px;\n        }\n        \n        .switch-medium.checked small {\n            left: 20px;\n        }\n        \n        .switch-small.checked small {\n            left: 13px;\n        }\n        \n        .disabled {\n            opacity: .50;\n            cursor: not-allowed;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], UiSwitch);
exports.UiSwitch = UiSwitch;
//# sourceMappingURL=ui-switch.component.js.map