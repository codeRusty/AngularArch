import { Component, OnInit, Input } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'case-transmission',
  templateUrl: './case-transmission.component.html',
  styleUrls: ['./case-transmission.component.css']
})
export class CaseTransmissionComponent implements OnInit {
  private MAX_LIMIT: number = 10;
  total_page_nos = [1];
  private current_page_no = 1;
  currentPageData = [];


  private _CaseID: string;


  get caseId(): string {
    // transform value for display
    return this._CaseID;
  }

  @Input()
  set caseId(caseid: string) {
    this._CaseID = caseid;
  }
  caseTransmission: any = [];
  constructor(private _http: coreHTTP, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetCaseTransmissions();
  }


  pagination() {
    this.currentPageData = this.caseTransmission.slice(1, this.MAX_LIMIT);
    let pages: number = this.caseTransmission.length / this.MAX_LIMIT ;
    this.total_page_nos = Array(Math.ceil(pages)).fill('').map((x, i) => i); // [0,1,2,3,4]
    console.log('total_page_nos', this.total_page_nos);
  }

  selectPage(page) {
    let startIndexDataCount = page * this.MAX_LIMIT;
    this.currentPageData = this.caseTransmission.slice(startIndexDataCount, startIndexDataCount + this.MAX_LIMIT);
  }

  GetCaseTransmissions() {
    this._http.get('api/case/GetCaseTransmission?caseid=' + this.caseId).subscribe(
      (response: any) => {
        console.log('GetCaseTransmission', response.Data);
        this.caseTransmission = response.Data
        this.pagination();
      },
      (error) => console.log(error),
      () => console.log('complete')
    );
  }

}
