import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'case-tasks',
  moduleId: module.id,
  templateUrl: 'case_tasks.component.html'
})

export class CaseTaskComponent implements OnInit {

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
  caseTasks: any = [];
  constructor(private _http: coreHTTP, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getcaseTasks();
  }

  pagination() {
    this.currentPageData = this.caseTasks.slice(1, this.MAX_LIMIT);
    let pages: number = this.caseTasks.length / this.MAX_LIMIT;
    this.total_page_nos = Array(Math.ceil(pages)).fill('').map((x, i) => i); // [0,1,2,3,4]
    console.log('total_page_nos', this.total_page_nos);
  }

  selectPage(page) {
    let startIndexDataCount = page * this.MAX_LIMIT;
    this.currentPageData = this.caseTasks.slice(startIndexDataCount, startIndexDataCount + this.MAX_LIMIT);
  }

  getcaseTasks() {
    let caseString = localStorage.getItem('phx_opened_Case');
    let caseData = JSON.parse(caseString);
    this._http.get('api/case/GetCaseTasks?caseid=' + this._CaseID).subscribe(
      (response: any) => {
        console.log('GetcaseTasks', response.Data);
        this.caseTasks = response.Data
        this.pagination();
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }

}
