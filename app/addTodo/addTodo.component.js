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
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var angularfire2_1 = require("angularfire2");
var userAuthService_1 = require('../services/userAuthService');
var AddTodo = (function () {
    // auth;
    function AddTodo(af, auth) {
        this.af = af;
        this.auth = auth;
    }
    AddTodo.prototype.ngOnInit = function () {
        // this.af.auth
        //     .subscribe(auth => this.auth = auth)
    };
    AddTodo.prototype.onSubmit = function (param, event) {
        var _this = this;
        this.auth.getAuthState()
            .subscribe(function (authData) {
            var path = _this.af.database.list('allTodos/' + authData.uid);
            path.push(param)
                .then(function (abc) { return console.log("data pushed successfully", abc); })
                .catch(function (err) { return alert("an error accured" + err); });
        });
        event.preventDefault();
    };
    AddTodo = __decorate([
        core_1.Component({
            selector: "add-todo",
            templateUrl: 'app/addTodo/addTodo.component.html',
            styleUrls: ['app/addTodo/addTodo.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, userAuthService_1.UserAuth])
    ], AddTodo);
    return AddTodo;
}());
exports.AddTodo = AddTodo;
//# sourceMappingURL=addTodo.component.js.map