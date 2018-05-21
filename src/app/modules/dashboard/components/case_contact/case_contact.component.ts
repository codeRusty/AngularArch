import { Component, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'case-contact',
    moduleId: module.id,
    templateUrl: 'case_contact.component.html',
    styleUrls: ['case_contact.component.css']
})

export class CaseContactComponent implements OnInit {
    private _CaseID: string;


    get caseId(): string {
        // transform value for display
        return this._CaseID;
    }

    @Input()
    set caseId(caseid: string) {
        this._CaseID = caseid;
    }

    caseContacts: any = [];
    ngOnInit() {
        this.getCaseContacts();
    }
    constructor(private _http: coreHTTP, private route: ActivatedRoute) {

    }
    getCaseContacts() {
        this._http.get('api/case/getcasecontacts?caseid=' + this.caseId + '&brandId=8').subscribe(
            (response: any) => {
                console.log('getcasecontacts', response.Data);
                this.caseContacts = response.Data.Contacts
            },
            (error) => console.log(error),
            () => console.log('complete')
        );

    }
}
