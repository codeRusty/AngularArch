import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class EventManagerService {

  public showNavBar: EventEmitter<boolean>;
  public isAdmin: EventEmitter<boolean> ;


  constructor() {

  }
  test() {

  }


}
