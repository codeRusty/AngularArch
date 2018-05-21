import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { BeamService } from '../../../_services/internal/beam.service';
import { GlobalRef } from '../../../_services/internal/client-side.globals.service';

import { Router, ActivatedRoute } from '@angular/router'
import { AppriseService } from '../../../_services/internal/apprise.service';

declare var screen: any;

@Component({
  selector: 'auth-success',
  templateUrl: './authcomplete.component.html',
  styleUrls: ['./authcomplete.component.css'],
  providers: [GlobalRef]
})


export class AuthCompleteComponent implements OnInit {
  user: ExternalUserSession;

  constructor(private route: ActivatedRoute, private _beam: BeamService) {

    this.user = new ExternalUserSession();
    
    this.route.queryParams.subscribe(params => {

      this.user.external_access_token = params['external_access_token'];
      this.user.provider = params['provider'];
      this.user.haslocalaccount = params['haslocalaccount'];
      this.user.external_user_name = params['external_user_name'];

      window.opener.$windowScope.authorizeUserExternal(this.user);
      // Set Cookie and beam and close
      window.close();
    });

  }

  ngOnInit() {
    console.log(this.user);
  }
}


export class ExternalUserSession {
  external_access_token: string;
  provider: string;
  haslocalaccount: boolean;
  external_user_name: string;
}
