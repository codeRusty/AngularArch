import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
//import initDemo = require('../../../assets/js/charts.js');
import { coreHTTP } from '../../../libs/core/coreHTTP.service'
import { User } from "../../../Common/Models/user.model";
import { AlertService } from "../../../_services/internal/alert.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AppriseService } from "../../../_services/internal/apprise.service";
import { AppKeyStrings } from "../../../Common/helper/appkeyStrings";


declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    caseId: string = "";
    allowedBrands: any[];
    caseRef: string = "";
    currentBrand: string;
    public User: User = new User();
    public UserRoleDetails: any = [];
    inFullView: boolean = false;
    constructor(private _http: coreHTTP, private _router: Router, private _apprise: AppriseService, public route: ActivatedRoute) {

    }
    ngOnInit() {
        this.setUserDetailsLocally();
        this.GetSystemUser();
        this.currentBrand = localStorage.getItem(AppKeyStrings.CURRENT_BRAND);
    }

    setUserDetailsLocally() {
        let user = localStorage.getItem(AppKeyStrings.CURRENT_USER);
        this.User = JSON.parse(user);
    }


    GetSystemUser() {
        if (localStorage.getItem(AppKeyStrings.USER_ROLE_DETAILS) != null)
            this.UserRoleDetails = JSON.parse(localStorage.getItem(AppKeyStrings.USER_ROLE_DETAILS));
        //console.log('asd',this.UserRoleDetails)
    }

    SearchCaseByRef() {
        var isnum = /^\d+$/.test(this.caseRef);
        if (this.caseRef != "" && isnum && parseInt(this.caseRef) > 50000) {

            this._http.get('api/case/GetCaseIdByReference?reference=' + this.caseRef).subscribe(
                (response: any) => {
                    this._router.navigate(['/home/case', response.Data], { relativeTo: this.route });
                },
                (error) => this._apprise.notitfyError("Invalid Case Ref"),
                () => console.log('complete')
            );


        }
        else {
            this._apprise.notitfyError('Invalid Case Ref');
        }
    }

    SearchByCaseId() {
        var isnum = /^\d+$/.test(this.caseId);
        if (this.caseId != "" && isnum && parseInt(this.caseId) > 50000) {
            this._router.navigate(['/home/case', this.caseRef], { relativeTo: this.route });
        }
        else {
            this._apprise.notitfyError('Invalid Case Ref');
        }
    }

    Initialize() {


    }

    viewFull() {
        console.log(window);
        // if (!this.inFullView) {
        //     window.FullScreen();
        //     this.inFullView = !this.inFullView
        // }
        // else {
        //     window.NormalScreen();
        //     this.inFullView = !this.inFullView

        // }

    }
}
