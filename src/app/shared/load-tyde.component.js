"use strict";
var core_1 = require("@angular/core");
var LoadTyde = (function () {
    function LoadTyde() {
        this.errorMessage = null;
        this.navigated = false; // true if navigated here
        // this.filterUpdated.emit("update the lists");
    }
    LoadTyde.prototype.surf = function (self) {
        var colors = ["#ccfff2", "#99ffe6", "#66ffd9", "#33ffcc", "#00ffbf", "#00cc99", "#009973", "#008060", "#00664d", "#004d39"];
        var target = document.getElementById("tyde");
        var i = 0;
        function warp() {
            function go() {
                i++;
                function play() {
                    if (i <= 9 && !!target) {
                        target.style.color = colors[i];
                    }
                }
                play();
                setTimeout(go, 200);
            }
            go();
        }
        ;
        warp();
        if (!!target) {
            self.wave = target.style;
            self.wave.opacity = "1";
        }
        (function fade() { (self.wave.opacity -= .1) < 0 ? self.wave.display = "none" : setTimeout(fade, 200); })();
    };
    ;
    LoadTyde.prototype.ngOnInit = function () {
        this.surf(this);
        console.log("spin!");
    };
    return LoadTyde;
}());
LoadTyde = __decorate([
    core_1.Component({
        selector: 'load-tyde',
        template: "\n      <i id=\"tyde\" class=\"fa fa-spinner fa-pulse fa-spin fa-2x fa-navy\"></i>\n    ",
        styles: ["\n\t    #tyde {\n\t      margin-top: 165px;\n\t\t  margin-left: 50%;\n\t\t  margin-bottom: 165px;\n\t\t}\n       \n    "]
    }),
    __metadata("design:paramtypes", [])
], LoadTyde);
exports.LoadTyde = LoadTyde;
//# sourceMappingURL=load-tyde.component.js.map