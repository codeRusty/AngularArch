import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from '../../modules/shared/navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { CommonModule } from '@angular/common';
import { JobOpeningPipe } from '../../_pipes/jobopening.pipe';
import { CaseExpertsComponent } from './components/case-experts/case-experts.component';
import { CaseTransmissionComponent } from './components/case-transmission/case-transmission.component';
import { DocViewComponent } from './components/doc-view/doc-view.component';
import { CaseAppointmentsComponent } from './components/case-appointments/case-appointments.component';


@NgModule({
  imports: [CommonModule,NavbarModule,SharedModule, RouterModule.forChild(MODULE_ROUTES), FormsModule, SidebarModule],
  declarations: [MODULE_COMPONENTS,JobOpeningPipe, CaseExpertsComponent, CaseTransmissionComponent, DocViewComponent, CaseAppointmentsComponent],
  providers: []
})

export class DashboardModule { }
