import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";



@Component({
  selector: 'doc-received',
  moduleId: module.id,
  templateUrl: 'doc_received.component.html',
  styleUrls: ['doc_received.component.css']
})

export class DocReceivedComponent implements OnInit {
  currentHoveredDoc: string = "data:image/png;base64,";
  docList = [];
  currentViewDocID = 0;
  private _CaseID: string;
  get caseId(): string {
    return this._CaseID;
  }

  @Input()
  set caseId(caseid: string) {
    this._CaseID = caseid;
  }

  ngOnInit() {
    this.getDocSent();
  }

  constructor(private _http: coreHTTP) {

  }

  getDocSent() {
    this._http.get('api/case/GetDocRecevied?caseid=' + this.caseId).subscribe(
      (response: any) => {
        this.docList = response.Data;
        console.log('GetDocRecevied', this.docList);
      },
      (error) => console.log(error),
      () => console.log('complete')
    );
  }


}
