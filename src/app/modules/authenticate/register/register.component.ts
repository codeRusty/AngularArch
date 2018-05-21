import { Component, OnInit } from '@angular/core';
import { GlobalRef } from '../../../_services/internal/client-side.globals.service';

import { AlertService } from '../../../_services/internal/alert.service';
import { RegisterService } from '../_services/register.service';
import { RegisterVM } from '../models/Register.VM'
import { AppriseService } from '../../../_services/internal/apprise.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  user: RegisterVM;

  constructor(private _apprise: AppriseService, private _alert: AlertService, private _globals: GlobalRef, private _register: RegisterService) {


  }

  ngOnInit() {
    this.user = new RegisterVM();
  }

  terms() {
    this._alert.error('You have the right to remain silence!! Please have your irghts');
  }

  registerUser() {
    var check = this.user.validate();
    if (check != 'valid')
      this._apprise.notitfyError(check);
    else
      this._register.registerUser(this.user).subscribe(
        (response) => this.onRegisterCompleted(response),
        (error) => console.log('error', error),
        () => console.log('complete')
      );
  }

  onRegisterCompleted(response) {

  }

}
