import { Component, OnInit} from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
// import { ViewTodo } from '../viewTodo/viewTodo.component';
import { Observable } from 'rxjs/observable';
import { AngularFire } from "angularfire2";
import { UserAuth } from '../services/userAuthService';

@Component({
    selector: "add-todo",
    templateUrl: 'app/addTodo/addTodo.component.html',
    styleUrls: ['app/addTodo/addTodo.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class AddTodo implements OnInit {
    // auth;
    constructor(private af: AngularFire, private auth: UserAuth) { }

    ngOnInit() {
        // this.af.auth
        //     .subscribe(auth => this.auth = auth)
    }

    onSubmit(param: HTMLInputElement, event) {
        this.auth.getAuthState()
            .subscribe(authData => {
                let path = this.af.database.list('allTodos/' + authData.uid);
                path.push(param)
                    .then(abc => console.log("data pushed successfully", abc))
                    .catch(err => alert("an error accured" + err));
            })
        event.preventDefault();
    }
}



