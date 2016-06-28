import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AddTodo } from './addTodo/addTodo.component';
// import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
// import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIconRegistry } from '@angular2-material/icon';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, AddTodo],
    providers: [MdIconRegistry]
})

export class AppComponent { }
