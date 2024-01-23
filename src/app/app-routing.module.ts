import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppGuard } from './guard/app-guard';
import { LoginGuard } from './guard/login-guard';


const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'employees',
        component: EmployeeComponent
      },
      {
        path: 'employee/:id',
        component: ProfileComponent
      },
      {
        path: '',
        pathMatch: "full",
        redirectTo: 'home'
      }
    ]
  },
  { path: 'auth/login', component: LoginComponent ,canActivate: [LoginGuard]},
  { path: 'auth/register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
