import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './authenticate.routes';
import { FormsModule } from '@angular/forms';
import { coreHTTP } from '../../libs/core/coreHTTP.service'
import { GlobalRef } from '../../_services/internal/client-side.globals.service';
import { AppriseService } from '../../_services/internal/apprise.service';

@NgModule({
  imports: [CommonModule, FormsModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS],
  providers: [coreHTTP, GlobalRef, AppriseService]
  //exports: [AuthenticateModule]
})

export class AuthenticateModule { }
