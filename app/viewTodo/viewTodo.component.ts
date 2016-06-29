import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
// import { AddTodo } from '../addTodo/addTodo.component'

@Component({
    selector: 'view-todo',
    templateUrl: 'app/viewTodo/viewTodo.component.html',
    styleUrls: ['app/viewTodo/viewTodo.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class ViewTodo {
    @Input() todo: any;

    constructor() {
    }
}