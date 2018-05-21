import { Injectable } from '@angular/core';
import { ILoginService } from './Ilogin.service';
import { coreHTTP } from '../../../libs/core/coreHTTP.service'
import { ApiGateway } from '../../../Common/ApiGateway'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { APIConfig } from '../../../_configs/api.config'
import { AppKeyStrings } from "../../../Common/helper/appkeyStrings";

@Injectable()
export class LoginService implements ILoginService {
  serviceUrl: string;

  constructor(private _http: coreHTTP, private apiGateway: ApiGateway) { }

  login(loginModel: any): Observable<any> {
    // building URL
    this.serviceUrl = APIConfig.AUTH_BASE_URL + APIConfig.Login;

    return this.apiGateway.login(this.serviceUrl, loginModel).map((response: any) => {
      return response.Data;
    }).catch((error: any) => Observable.throw(error));
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem(AppKeyStrings.CURRENT_USER) != null && localStorage.getItem(AppKeyStrings.USER_TOKEN) != null)
      return true;
    return false;
  }



}
