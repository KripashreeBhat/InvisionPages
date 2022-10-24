import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailCheckComponent } from './email-check/email-check.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path : "login", component: LoginComponent},
  { path : "email", component: EmailCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  LoginComponent,
  EmailCheckComponent
]