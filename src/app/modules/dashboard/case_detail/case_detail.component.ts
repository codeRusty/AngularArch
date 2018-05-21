import { Component, OnInit, OnDestroy } from '@angular/core';
import { coreHTTP } from "../../../libs/core/coreHTTP.service";
import { CaseModel } from "../../../Common/Models/case.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'case_detail.component.html',
    styleUrls: ["case_detail.component.css"]
})

export class CaseDetailComponent implements OnInit, OnDestroy {
    currentTab: string = "case-contact";
    alreadyLoadedTab: string[] = [];
    caseId: number;
    openedCase: CaseModel = null;
    caseContacts: any = [];
    currentBrand: string;
    inFullView: boolean = false;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.caseId = +params['id']; // (+) converts string 'id' to a number
            this.getCaseSummary();
            // In a real app: dispatch action to load the details here.
        });
        this.currentBrand = localStorage.getItem('phx_curr_brand');
    }

    constructor(private _http: coreHTTP, private route: ActivatedRoute) {

    }

    getCaseSummary() {
        this._http.get('api/case/getcase?id=' + this.caseId).subscribe(
            (response: any) => {
                this.openedCase = response.Data
                localStorage.setItem('phx_opened_Case', JSON.stringify(this.openedCase));
            },
            (error) => console.log(error),
            () => console.log('complete')
        );
    }

    ngOnDestroy() {

    }

    onTabChange(tab: string) {
        this.currentTab = tab;
        if (!this.isalreadyLoaded(tab))
            this.alreadyLoadedTab.push(tab);
    }

    isalreadyLoaded(tab: string) {
        return this.alreadyLoadedTab.indexOf(tab) >= 0
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
