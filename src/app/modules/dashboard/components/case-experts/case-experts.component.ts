import { Component, OnInit, Input } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'case-experts',
  templateUrl: './case-experts.component.html',
  styleUrls: ['./case-experts.component.css']
})
export class CaseExpertsComponent implements OnInit {
  private _CaseID: string;


  get caseId(): string {
    // transform value for display
    return this._CaseID;
  }

  @Input()
  set caseId(caseid: string) {
    this._CaseID = caseid;
  }

  private MAX_LIMIT: number = 10;
  total_page_nos = [1];
  private current_page_no = 1;
  currentPageData = [];
  caseExperts: any = [];
  constructor(private _http: coreHTTP, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCaseExperts();
  }

  pagination() {
    this.currentPageData = this.caseExperts.slice(1, this.MAX_LIMIT);
    let pages: number = this.caseExperts.length / this.MAX_LIMIT ;
    this.total_page_nos = Array(Math.ceil(pages)).fill('').map((x, i) => i); // [0,1,2,3,4]
    console.log('total_page_nos', this.total_page_nos);
  }

  selectPage(page) {
    let startIndexDataCount = page * this.MAX_LIMIT;
    this.currentPageData = this.caseExperts.slice(startIndexDataCount, startIndexDataCount + this.MAX_LIMIT);
  }

  getCaseExperts() {
    this._http.get('api/case/GetCaseExpert?caseid=' + this.caseId).subscribe(
      (response: any) => {
        console.log('GetCaseExpert', response.Data);
        this.caseExperts = response.Data
        this.pagination();
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }

}
