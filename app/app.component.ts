import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'my-app',
    template: `<button md-button>FLAT</button>
<button md-raised-button>RAISED</button>
<button md-icon-button>
   <md-icon class="md-24">favorite</md-icon>
</button>
<button md-fab>
   <md-icon class="md-24">add</md-icon>
</button>
<button md-mini-fab>
   <md-icon class="md-24">add</md-icon>
</button>`,
    directives: [MD_BUTTON_DIRECTIVES]
})

export class AppComponent { }
