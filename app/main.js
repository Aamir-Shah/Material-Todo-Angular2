"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var angularfire2_1 = require('angularfire2');
var userAuthService_1 = require('./services/userAuthService');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase({
        apiKey: "AIzaSyB40ivM4TXDm8Vh4djRS4KbtKQC4htDWZA",
        authDomain: "ng2todo-d3141.firebaseapp.com",
        databaseURL: "https://ng2todo-d3141.firebaseio.com",
        storageBucket: "ng2todo-d3141.appspot.com"
    }),
    angularfire2_1.firebaseAuthConfig({
        provider: angularfire2_1.AuthProviders.Facebook,
        method: angularfire2_1.AuthMethods.Popup
    }),
    userAuthService_1.UserAuth
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map