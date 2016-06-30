import { Component, Input, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs/observable";
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { UserAuth } from '../services/userAuthService';
// import { AddTodo } from '../addTodo/addTodo.component'

@Component({
    selector: 'view-todo',
    templateUrl: 'app/viewTodo/viewTodo.component.html',
    styleUrls: ['app/viewTodo/viewTodo.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class ViewTodo implements OnInit {
    // @Input() todo: any;
    allTodos: Observable<any>;
    userAuthState: any;
    constructor(private af: AngularFire, private auth: UserAuth) {
        console.log('constructor is running frm viewTodo')
    }

    ngOnInit() {
        console.log("ngOnInit is running frm viewTodo");

        this.auth.getAuthState()
            .subscribe(authdata => {
                if (authdata) {
                    this.allTodos = this.af.database.list("/allTodos");
                } else {
                    alert("Please signin to sync your Todos")
                }
            })

    }
}   