import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmailCheckComponent } from './email-check/email-check.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';
import { NobackAuthGuard } from './noback-auth.guard';
import { PptComponent } from './ppt/ppt.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path : " ",redirectTo:'/login', pathMatch:'full'},
  { path : "login", component:LoginComponent,canActivate:[NobackAuthGuard] },
  { path : "email", component: EmailCheckComponent},
  { path: "profile", component:ProfileComponent, canActivate:[PermissionGuard] },
  { path: "changepassword", component:ChangepasswordComponent,canActivate:[PermissionGuard] },
  { path: "ppt", component:PptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  LoginComponent,
  EmailCheckComponent,
  ProfileComponent,
  ChangepasswordComponent,
  PptComponent
]