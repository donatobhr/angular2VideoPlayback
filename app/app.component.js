"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var progress_component_1 = require('./progress.component');
var toolbar_component_1 = require('./toolbar.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'video-app',
            template: "\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div id=\"fullPlayer\">\n                            <div class=\"embed-responsive embed-responsive-16by9\">\n                                <video id=\"videoDisplay\" src=\"video/cow.mp4\" width=\"100%\" height=\"100%\" class=\"embed-responsive-item\" controls></video>\n                                <div id=\"bigPlayButton\"><i class=\"fa fa-play\"></i></div>\n                                <div id=\"videoTitle\">Video Title</div>\n                            </div>\n                            <video-progress></video-progress>\n                            <video-toolbar></video-toolbar>\n                        </div>\n                    </div>\n               </div>\n               ",
            directives: [progress_component_1.ProgressComponent, toolbar_component_1.ToolbarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map