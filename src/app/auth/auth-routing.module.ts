import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutPageComponent } from './layout/auth-layout-page/auth-layout-page.component';
import { LoginRegisterPageComponent } from './pages/login-register/login-register-page/login-register-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPageComponent,
    children: [
        {path: 'login-registro', component:LoginRegisterPageComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
