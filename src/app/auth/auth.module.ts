import { NgModule } from '@angular/core';
import { LoginRegisterPageComponent } from './pages/login-register/login-register-page/login-register-page.component';
import { AuthLayoutPageComponent } from './layout/auth-layout-page/auth-layout-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule, AuthRoutingModule],
  exports: [],
  declarations: [LoginRegisterPageComponent, AuthLayoutPageComponent],
  providers: [],
})
export class AuthModule { }
