"use strict";
var core_1 = require("@angular/core");
var feed_service_1 = require("./feed.service");
var Feed = (function () {
    function Feed(_feedService) {
        this._feedService = _feedService;
    }
    Feed.prototype.ngOnInit = function () {
        this._loadFeed();
    };
    Feed.prototype.expandMessage = function (message) {
        message.expanded = !message.expanded;
    };
    Feed.prototype._loadFeed = function () {
        this.feed = this._feedService.getData();
    };
    return Feed;
}());
Feed = __decorate([
    core_1.Component({
        selector: 'feed',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./feed.scss')],
        template: require('./feed.html')
    }),
    __metadata("design:paramtypes", [feed_service_1.FeedService])
], Feed);
exports.Feed = Feed;
//# sourceMappingURL=feed.component.js.map