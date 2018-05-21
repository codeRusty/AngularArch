import { Injectable } from '@angular/core';
import { IRegisterService } from './Iregister.service'
import { RegisterVM } from '../models/Register.VM'
import { coreHTTP } from '../../../libs/core/coreHTTP.service'
import { APIConfig } from '../../../_configs/api.config'


@Injectable()
export class RegisterService implements IRegisterService {

    registerURL: string;

    constructor(private _http: coreHTTP) {
        this.registerURL = APIConfig.AUTH_API_URL + APIConfig.Register
    }


    registerUser(user: RegisterVM): any {
        return this._http.post(this.registerURL, JSON.stringify(user), null);
    }


    // checkIfEmailExists(email: string): any { }

}
