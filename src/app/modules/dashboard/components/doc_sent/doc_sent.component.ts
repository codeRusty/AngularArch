import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";
import { LoaderService } from "../../../../Common/components/loader.service";



@Component({
  selector: 'doc-sent',
  moduleId: module.id,
  templateUrl: 'doc_sent.component.html'
})

export class DocSentComponent implements OnInit {
  private MAX_LIMIT: number = 10;
  total_page_nos = [1];
  private current_page_no = 1;
  currentPageData = [];


  docList = [];

  private _CaseID: string;
  get caseId(): string {
    // transform value for display
    return this._CaseID;
  }
  @Input()
  set caseId(caseid: string) {
    this._CaseID = caseid;
  }

  ngOnInit() {
    this.getDocSent();
  }

  constructor(private _http: coreHTTP, private _loader: LoaderService) {

  }

  getDocSent() {
    this._loader.show();
    this._http.get('api/case/getdocsent?caseid=' + this._CaseID).subscribe(
      (response: any) => {
        this.docList = response.Data;
        console.log('DocSentComponent', this.docList);
        this._loader.hide();
        this.pagination();
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }
  pagination() {
    this.currentPageData = this.docList.slice(1, this.MAX_LIMIT);
    let pages: number = this.docList.length / this.MAX_LIMIT ;
    this.total_page_nos = Array(Math.ceil(pages)).fill('').map((x, i) => i); // [0,1,2,3,4]
    console.log('total_page_nos', this.total_page_nos);
  }

  selectPage(page) {
    let startIndexDataCount = page * this.MAX_LIMIT;
    this.currentPageData = this.docList.slice(startIndexDataCount, startIndexDataCount + this.MAX_LIMIT);
  }

}
