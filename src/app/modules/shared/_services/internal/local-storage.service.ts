import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
declare var localStorage: any;

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: Object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public getItemObject(key: string): Object {
    return JSON.parse(localStorage.getItem(key));
  }
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
