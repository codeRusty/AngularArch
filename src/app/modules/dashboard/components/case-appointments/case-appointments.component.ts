import { Component, OnInit, Input } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'case-appointments',
  templateUrl: './case-appointments.component.html',
  styleUrls: ['./case-appointments.component.css']
})
export class CaseAppointmentsComponent implements OnInit {

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
  caseAppointments: any = [];
  constructor(private _http: coreHTTP, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getcaseAppointments();
  }

  pagination() {
    this.currentPageData = this.caseAppointments.slice(1, this.MAX_LIMIT);
    let pages: number = this.caseAppointments.length / this.MAX_LIMIT ;
    this.total_page_nos = Array(Math.ceil(pages)).fill('').map((x, i) => i); // [0,1,2,3,4]
    console.log('total_page_nos', this.total_page_nos);
  }

  selectPage(page) {
    let startIndexDataCount = page * this.MAX_LIMIT;
    this.currentPageData = this.caseAppointments.slice(startIndexDataCount, startIndexDataCount + this.MAX_LIMIT);
  }

  getcaseAppointments() {
    let caseString = localStorage.getItem('phx_opened_Case');
    let caseData = JSON.parse(caseString);
    this._http.get('api/case/GetCaseAppointments?casereference=' + caseData.CaseReference).subscribe(
      (response: any) => {
        console.log('GetCaseAppointments', response.Data);
        this.caseAppointments = response.Data
        this.pagination();
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }
}
