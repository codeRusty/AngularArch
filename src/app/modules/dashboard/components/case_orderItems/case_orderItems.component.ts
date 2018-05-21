import { Component, Directive, Input, OnInit } from '@angular/core';
import { coreHTTP } from "../../../../libs/core/coreHTTP.service";



@Component({
  selector: 'case-order-items',
  moduleId: module.id,
  templateUrl: 'case_orderItems.component.html'
})

export class CaseOrderItemsComponent implements OnInit {
  private _OrderID: string;
  orderItemList: any = [];

  get orderId(): string {
    // transform value for display
    return this._OrderID;
  }

  @Input()
  set orderId(orderId: string) {
    console.log('prev value: ', this._OrderID);
    console.log('got name: ', orderId);
    this._OrderID = orderId;
  }

  ngOnInit() {
    this.getOrders();
  }

  constructor(private _http: coreHTTP) {

  }

  getOrders() {
    this._http.get('api/case/GetOrderItems?orderId=' + this._OrderID + '&username=rowland.corentin').subscribe(
      (response: any) => {
        this.orderItemList = response.Data;
      },
      (error) => console.log(error),
      () => console.log('complete')
    );

  }

}
