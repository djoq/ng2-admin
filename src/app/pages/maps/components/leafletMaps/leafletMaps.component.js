"use strict";
var core_1 = require("@angular/core");
require("./leafletMaps.loader");
var LeafletMaps = (function () {
    function LeafletMaps(_elementRef) {
        this._elementRef = _elementRef;
    }
    LeafletMaps.prototype.ngAfterViewInit = function () {
        var el = this._elementRef.nativeElement.querySelector('.leaflet-maps');
        L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
        var map = L.map(el).setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };
    return LeafletMaps;
}());
LeafletMaps = __decorate([
    core_1.Component({
        selector: 'leaflet-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./leafletMaps.scss')],
        template: require('./leafletMaps.html')
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], LeafletMaps);
exports.LeafletMaps = LeafletMaps;
//# sourceMappingURL=leafletMaps.component.js.map