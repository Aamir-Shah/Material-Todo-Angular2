import { Injectable  } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class UserAuth {

    constructor(private af: AngularFire) {

    }

    getAuthState() {
        return this.af.auth
    }

}