import { Route } from '@angular/router';
import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from '../../_directives/alert/alert.component';
import { AuthCompleteComponent } from './authcomplete/authcomplete.component';

export const MODULE_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'authcomplete', component: AuthCompleteComponent }
]

export const MODULE_COMPONENTS = [
    LoginComponent, RegisterComponent, AlertComponent, AuthCompleteComponent, AuthenticateComponent
]
