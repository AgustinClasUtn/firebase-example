import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { LoginWithAuthComponent } from './componentes/login-with-auth/login-with-auth.component';
import { RegisterWithAuthComponent } from './componentes/register-with-auth/register-with-auth.component';

export const routes: Routes = [
    {path: "firestore", component:LoginComponent},
    {path: "login", component:LoginWithAuthComponent},
    {path: "register", component:RegisterWithAuthComponent},
    {path: "**", component:LoginComponent}
];
