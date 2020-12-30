import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './auth.guard';
import {SignupComponent} from './component/signup/signup.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
export  const routes: Routes = [
  // {path: '', component: HomeComponent, canActivate: [AppGuard]},
  // {path: 'details/:city', component: DetailsComponent, canActivate: [AppGuard]},
  // {path: 'add', component: AddComponent, canActivate: [AppGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent , canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];
