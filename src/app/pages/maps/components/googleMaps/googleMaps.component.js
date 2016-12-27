"use strict";
var core_1 = require("@angular/core");
var googleMaps_loader_1 = require("./googleMaps.loader");
var GoogleMaps = (function () {
    function GoogleMaps(_elementRef) {
        this._elementRef = _elementRef;
    }
    GoogleMaps.prototype.ngAfterViewInit = function () {
        var el = this._elementRef.nativeElement.querySelector('.google-maps');
        // TODO: do not load this each time as we already have the library after first attempt
        googleMaps_loader_1.GoogleMapsLoader.load(function (google) {
            new google.maps.Map(el, {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        });
    };
    return GoogleMaps;
}());
GoogleMaps = __decorate([
    core_1.Component({
        selector: 'google-maps',
        styles: [require('./googleMaps.scss')],
        template: require('./googleMaps.html'),
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], GoogleMaps);
exports.GoogleMaps = GoogleMaps;
//# sourceMappingURL=googleMaps.component.js.map