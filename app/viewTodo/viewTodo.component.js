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
var angularfire2_1 = require("angularfire2");
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var userAuthService_1 = require('../services/userAuthService');
// import { AddTodo } from '../addTodo/addTodo.component'
var ViewTodo = (function () {
    function ViewTodo(af, auth) {
        this.af = af;
        this.auth = auth;
        console.log('constructor is running frm viewTodo');
    }
    ViewTodo.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit is running frm viewTodo");
        this.auth.getAuthState()
            .subscribe(function (authdata) {
            if (authdata) {
                _this.allTodos = _this.af.database.list("/allTodos");
            }
            else {
                alert("Please signin to sync your Todos");
            }
        });
    };
    ViewTodo = __decorate([
        core_1.Component({
            selector: 'view-todo',
            templateUrl: 'app/viewTodo/viewTodo.component.html',
            styleUrls: ['app/viewTodo/viewTodo.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, icon_1.MD_ICON_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, userAuthService_1.UserAuth])
    ], ViewTodo);
    return ViewTodo;
}());
exports.ViewTodo = ViewTodo;
//# sourceMappingURL=viewTodo.component.js.map