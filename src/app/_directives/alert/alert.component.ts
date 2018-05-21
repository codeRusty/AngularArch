import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../_services/internal/index';

@Component({
    moduleId: "AlertComponent",
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent {
    alert: IAlert;


    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(alert => { this.alert = alert; });
        setTimeout(function () {
            this.alert = null;
        }, 2000);
    }

    close() {
        this.alert = null;
    }
}
interface IAlert {
    type: string,
    text: string
}