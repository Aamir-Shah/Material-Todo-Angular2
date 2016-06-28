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
var AddTodo = (function () {
    function AddTodo() {
    }
    AddTodo.prototype.onSubmit = function (event) {
        console.log(event);
    };
    AddTodo = __decorate([
        core_1.Component({
            selector: "add-todo",
            templateUrl: 'app/addTodo/addTodo.component.html',
            styleUrls: ['app/addTodo/addTodo.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AddTodo);
    return AddTodo;
}());
exports.AddTodo = AddTodo;
//# sourceMappingURL=addTodo.component.js.map