import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_gaurd/auth.gaurd';
import { PNF404Component } from "./modules/shared/404/404.component";


const routes: Routes = [
  { path: '**', component: PNF404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  //entryComponents:[EmailPopUpComponent]
})

export class AppRoutingModule { }

export const appRoutingComponents = [

]