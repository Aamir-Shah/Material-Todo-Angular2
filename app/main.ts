import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http'
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { UserAuth } from './services/userAuthService';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyB40ivM4TXDm8Vh4djRS4KbtKQC4htDWZA",
        authDomain: "ng2todo-d3141.firebaseapp.com",
        databaseURL: "https://ng2todo-d3141.firebaseio.com",
        storageBucket: "ng2todo-d3141.appspot.com"
    }),
    firebaseAuthConfig({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
    }),
    UserAuth
])
    .catch((err: any) => console.error(err))
