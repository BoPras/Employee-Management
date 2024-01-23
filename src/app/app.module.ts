import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeComponent } from './components/employee/employee.component';
import { DataServiceService } from './service/data.service.service';
import { EmployeeService } from './service/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    NotFoundComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    EmployeeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataServiceService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
