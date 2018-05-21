import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'
import { GlobalRef } from './client-side.globals.service';

@Injectable()
export class AppriseService {



    constructor(private _global: GlobalRef) {

    }

    notitfySuccess(msg: string) {
        this._global.nativeDemo.showNotification(2, 'top', 'center', msg);
    }
    notitfyError(msg: string) {
        this._global.nativeDemo.showNotification(4, 'top', 'center', msg);
    }
    notitfyWarning(msg: string) {
        this._global.nativeDemo.showNotification(3, 'top', 'center', msg);
    }
    notitfyInfo(msg: string) {
        this._global.nativeDemo.showNotification(1, 'top', 'center', msg);
    }


}
