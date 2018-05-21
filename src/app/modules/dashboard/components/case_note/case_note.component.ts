import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";



@Component({
  selector: 'case-note',
  moduleId: module.id,
  templateUrl: 'case_note.component.html'
})

export class CaseNoteComponent implements OnInit {

  noteList = [];
  SystemUser: any = {};
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

  constructor(private _http: coreHTTP) {

  }

  GetSystemUser() {
    if (localStorage.getItem('systemUser') != null)
      this.SystemUser = JSON.parse(localStorage.getItem('systemUser'));
  }

  getDocSent() {
    this._http.get('api/case/GetNotes?caseid=' + this._CaseID + '&username=' + this.SystemUser.PersonName).subscribe(
      (response: any) => {
        this.noteList = response.Data;
        console.log('casenoteList', this.noteList);
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }

}
