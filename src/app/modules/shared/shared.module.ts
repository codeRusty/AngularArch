import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ->  Components
import { FooterModule } from './footer/footer.module'
import { NavbarModule } from './navbar/navbar.module'
import { PNF404Component } from "./404/404.component";



@NgModule({
    imports: [FormsModule, HttpModule, BrowserModule, FooterModule, NavbarModule],
    declarations: [PNF404Component],
    exports: [PNF404Component]
})
export class SharedModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: SharedModule,
    //         providers: [AlertService, LocalStorageService, BeamService, GlobalRef]
    //     };
    // }

}
