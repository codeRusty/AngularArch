import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CaseComponent } from './case/case.component';
import { CaseContactComponent } from './components/case_contact/case_contact.component';
import { CaseDetailComponent } from './case_detail/case_detail.component';
import { DocSentComponent } from './components/doc_sent/doc_sent.component';
import { DocReceivedComponent } from "./components/doc_received/doc_received.component";
import { CaseNoteComponent } from "./components/case_note/case_note.component";
import { CaseOrderComponent } from "./components/case_order/case_order.component";
import { CaseOrderItemsComponent } from "./components/case_orderItems/case_orderItems.component";

import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { TableComponent } from './table/table.component';

import { AuthGuard } from '../../_gaurd/auth.gaurd';
import { CaseExpertsComponent } from "./components/case-experts/case-experts.component";
import { CaseTransmissionComponent } from "./components/case-transmission/case-transmission.component";
import { LogoutComponent } from "./logout/logout.component";
import { CaseTaskComponent } from "./components/case_tasks/case_tasks.component";


export const MODULE_ROUTES: Route[] = [
    {
        path: 'home', component: DashboardComponent,
        children: [
            { path: '', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'case', component: CaseComponent, canActivate: [AuthGuard] },
            { path: 'case/:id', component: CaseDetailComponent, canActivate: [AuthGuard] },
            { path: 'docsent', component: DocSentComponent, canActivate: [AuthGuard] },
        ]
    },
    { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
    { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
    { path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }


]

export const MODULE_COMPONENTS = [
    HomeComponent,
    CaseDetailComponent,
    TableComponent,
    DocSentComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    CaseContactComponent,
    DashboardComponent,
    CaseComponent,
    //just include no routing
    DocReceivedComponent,
    CaseNoteComponent,
    CaseOrderComponent,
    CaseOrderItemsComponent,
    CaseExpertsComponent,
    CaseTransmissionComponent,
    LogoutComponent,
    CaseTaskComponent
]
