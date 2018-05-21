import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { coreHTTP } from "../../libs/core/coreHTTP.service";


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    allowedBrands: any[];
    constructor(private _http: coreHTTP) {
      //  this.getAllowedBrands();
    }

    getAllowedBrands() {
        this._http.post('api/account/GetAllowedBrands', null).subscribe(
            (response: any) => {
                console.log()
                this.allowedBrands = response.Data;
            },
            (error) => console.log(error),
            () => console.log('complete')
        );
    }

}
