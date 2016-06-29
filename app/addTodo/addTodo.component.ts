import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { ViewTodo } from '../viewTodo/viewTodo.component';

@Component({
    selector: "add-todo",
    templateUrl: 'app/addTodo/addTodo.component.html',
    styleUrls: ['app/addTodo/addTodo.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, ViewTodo]
})
export class AddTodo {
    arr: any[] = [];
    constructor() { }

    onSubmit(event: HTMLInputElement) {
        this.arr.push(event);
        console.log(this.arr, "arr")
    }

}