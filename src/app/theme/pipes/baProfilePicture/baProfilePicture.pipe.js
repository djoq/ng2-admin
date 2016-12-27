"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var BaProfilePicturePipe = (function () {
    function BaProfilePicturePipe() {
    }
    BaProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return theme_1.layoutPaths.images.profile + input + '.' + ext;
    };
    return BaProfilePicturePipe;
}());
BaProfilePicturePipe = __decorate([
    core_1.Pipe({ name: 'baProfilePicture' }),
    __metadata("design:paramtypes", [])
], BaProfilePicturePipe);
exports.BaProfilePicturePipe = BaProfilePicturePipe;
//# sourceMappingURL=baProfilePicture.pipe.js.map