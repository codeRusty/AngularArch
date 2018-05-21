import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";



@Component({
  selector: 'case-order',
  moduleId: module.id,
  templateUrl: 'case_order.component.html'
})

export class CaseOrderComponent implements OnInit {
  private _CaseID: string;
  orderList: any = [];

  get caseId(): string {
    // transform value for display
    return this._CaseID;
  }

  @Input()
  set caseId(caseid: string) {
    console.log('prev value: ', this._CaseID);
    console.log('got name: ', caseid);
    this._CaseID = caseid;
  }

  ngOnInit() {
    this.getOrders();
  }

  constructor(private _http: coreHTTP) {

  }

  getOrders() {
    this._http.get('api/case/GetOrders?caseid=' + this.caseId + '&username=rowland.corentin').subscribe(
      (response: any) => {
        this.orderList = response.Data;
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }

}
