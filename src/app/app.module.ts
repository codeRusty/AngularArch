import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//-> Modules and components and directives at root level to apply accross application
import { AppRoutingModule, appRoutingComponents } from './app.routing.module';

import { AuthenticateModule } from './modules/authenticate/authenticate.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { SharedModule } from './modules/shared/shared.module';
import { NavbarModule } from './modules/shared/navbar/navbar.module';
import { ApiGateway } from './Common/ApiGateway'
import { CommonModule, NgClass } from '@angular/common'

import { AppComponent } from './app.component';

import { BeamService, AlertService, LocalStorageService } from './_services/internal/index';
import { AuthGuard } from './_gaurd/auth.gaurd';
import { LoaderService } from "./Common/components/loader.service";
import { LoaderComponent } from "./Common/components/loader.component";


@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    LoaderComponent
  ],
  imports: [
    AuthenticateModule,
    DashboardModule,
    CommonModule,
    FormsModule,
    NavbarModule,
    HttpModule,
    BrowserModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoaderService, AlertService, BeamService, AuthGuard, LocalStorageService, ApiGateway],
  bootstrap: [AppComponent]
})
export class AppModule { }
