import { Injectable } from '@angular/core';
declare var demo:any;

function _window(): any {
    // return the global native browser window object
    return window;
}
function _demo(): any {
    // return the global native browser window object
    return demo;
}


@Injectable()
export class GlobalRef {
    get nativeWindow(): any {
        return _window();
    }
    get nativeDemo(): any {
        return _demo();
    }
}