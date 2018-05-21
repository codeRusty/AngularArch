import { Component, OnInit } from '@angular/core';
import { coreHTTP } from '../../../libs/core/coreHTTP.service'
import { CaseModel } from "../../../Common/Models/case.model";
import { Router } from "@angular/router";
import { AppriseService } from "../../../_services/internal/apprise.service";
import { AppKeyStrings } from "../../../Common/helper/appkeyStrings";

@Component({
    selector: 'case-cmp',
    moduleId: module.id,
    templateUrl: 'case.component.html',
    styleUrls: ['case.component.css']
})

export class CaseComponent implements OnInit {
    caseId: string;
    caseList:any=[];
    currentBrand: string;
    caseRef: string = "";
    constructor(private _http: coreHTTP, private _router: Router, private _apprise: AppriseService) {

    }

    ngOnInit() {

        this.currentBrand = localStorage.getItem(AppKeyStrings.CURRENT_BRAND);
        console.log('CaseComponent', this.currentBrand);
        this.getCaseList();
    }
    SearchByCaseId() {

    }

    getCaseList() {
        this._http.get('api/case/GetNewCases?top=10&skip=0').subscribe(
            (response: any) => {
                this.caseList = response.Data
                //localStorage.setItem('phx_opened_', JSON.stringify(this.caseList));
            },
            (error) => console.log(error),
            () => console.log('complete')
        );
    }
}
