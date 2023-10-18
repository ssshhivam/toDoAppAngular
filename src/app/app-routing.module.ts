import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListToDOComponent } from './list-to-do/list-to-do.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomePageComponent },
  { path: 'todos', component: ListToDOComponent},
  { path: '**', component: ErrorsComponent }  //anything except the above mentioned paths comes under this **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
