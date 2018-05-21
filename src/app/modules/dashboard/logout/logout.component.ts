import { Component, OnInit } from '@angular/core';
import { BeamService } from '../../../_services/internal/beam.service';

declare var gapi: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

  constructor(private _beam: BeamService) { }

  ngOnInit() {
    this.gsignOut();
  }

  gsignOut() {
    //window.location.href = "https://accounts.google.com/Logout?&continue=https://www.google.com";
    this._beam.broadcast('logout');
  }
}
