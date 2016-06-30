import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon]
})
export class HeaderComponent {
    constructor(private af: AngularFire) {
    }
    login() {
        this.af.auth.login()
            .then(abc => console.log("loggedIn", abc))
            .catch(err => console.log("an error accured", err))
    }
}