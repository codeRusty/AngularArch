import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { BeamService } from '../../../_services/internal/beam.service';
import { GlobalRef } from '../../../_services/internal/client-side.globals.service';
import { LoginVM } from '../models/Login.VM';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router'
import { AppriseService } from '../../../_services/internal/apprise.service';
import { GoogleSignInRegisterVM } from '../models/googleRegister.VM';
import { AppKeyStrings } from "../../../Common/helper/appkeyStrings";

declare var screen: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalRef, LoginService]
})

export class LoginComponent implements OnInit {

  private myClientId: string = '50854622354-s91efca4geard73bh4ofganma42u1efi.apps.googleusercontent.com';
  domain = "daffodilsw.com";
  user: LoginVM;

  constructor(private _apprise: AppriseService, private _beam: BeamService, private _globals: GlobalRef, private _login: LoginService, private _router: Router) {
    this.user = new LoginVM();
  }

  ngOnInit() {
    console.log(this._login.isUserLoggedIn())
    if (this._login.isUserLoggedIn())
      this._router.navigate['/home'];

  }

  onClickForgot() {
    this._apprise.notitfyInfo('Comming Soon!!');
  }

  // When : Method to call when Login button is click (Normal Login)
  login() {
    //validating Model
    var check = this.user.validate();

    //If request is valid send it to server
    if (check == "valid") {
      var data = { Email: this.user.email, Password: this.user.password }
      this._login.login(data).subscribe(user => {

        // manage Login
        this.manageLogin(user);

      }, error => {
        this._apprise.notitfyError(JSON.stringify(error));
      });
    }
    else
      this._apprise.notitfyError(check);
  }

  // Method to call when Login is Successful (Normal Login)
  manageLogin(user: any) {
    if (user != null) {
      localStorage.setItem(AppKeyStrings.USER_TOKEN, 'token1')
      localStorage.setItem(AppKeyStrings.CURRENT_USER, JSON.stringify(user));
      this._router.navigate(["/home"]);
    }
    else
      this._apprise.notitfyError('Invalid Credentials');
  }




  gLogin(provider: string) {

    var redirectUri = location.protocol + '//' + location.host + '/authcomplete';

    var externalProviderUrl = "provider=" + provider +
      "&response_type=token&client_id=ngAuthApp" +
      "&redirect_uri=" + encodeURIComponent('http://localhost:4200/authcomplete');

    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (400 / 2)) + dualScreenLeft;
    var top = ((height / 2) - (500 / 2)) + dualScreenTop;

    window['$windowScope'] = this;
    var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", 'scrollbars=yes, width=' + 400 + ', height=' + 500 + ', top=' + top + ', left=' + left);

  }

  authorizeUserExternal(userDetails: any) {
    this._beam.broadcast('login', userDetails);
  }

}
