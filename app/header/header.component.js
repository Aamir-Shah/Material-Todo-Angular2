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
var angularfire2_1 = require('angularfire2');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var HeaderComponent = (function () {
    function HeaderComponent(af) {
        this.af = af;
    }
    HeaderComponent.prototype.login = function () {
        this.af.auth.login()
            .then(function (abc) { return console.log("loggedIn", abc); })
            .catch(function (err) { return console.log("an error accured", err); });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'app/header/header.component.html',
            styleUrls: ['app/header/header.component.css'],
            directives: [toolbar_1.MD_TOOLBAR_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map