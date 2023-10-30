import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListToDOComponent } from './list-to-do/list-to-do.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomePageComponent,canActivateChild:[RouteGuardService] },
  { path: 'todos', component: ListToDOComponent,canActivateChild:[RouteGuardService]},
  {path: 'home',component:HomeComponent},
  {path: 'logout',component:LogoutComponent},
  { path: '**', component: ErrorsComponent } 
  //anything except the above mentioned paths comes under this **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
