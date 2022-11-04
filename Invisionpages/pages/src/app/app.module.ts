import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';

import { FooterComponent } from './footer/footer.component';

import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

import { HttpClientModule } from '@angular/common/http';
import { PermissionGuard } from './permission.guard';
import { NobackAuthGuard } from './noback-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    HeaderProfileComponent,
    FooterComponent,
    AdminComponent,
    AdminAddComponent
  ],
  entryComponents:[AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
    
  ],
  providers: [PermissionGuard,NobackAuthGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
