import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: "add-todo",
    templateUrl: 'app/addTodo/addTodo.component.html',
    styleUrls: ['app/addTodo/addTodo.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class AddTodo {

    constructor() { }

    onSubmit(event: HTMLInputElement) {
        console.log(event)
    }

}