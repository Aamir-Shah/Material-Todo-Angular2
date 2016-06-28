import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon'

@Component({
    selector: 'header',
    templateUrl: 'app/header/header.component.html',
    directives: [MD_TOOLBAR_DIRECTIVES, MdIcon]
})
export class HeaderComponent {
    constructor() {
    }
}