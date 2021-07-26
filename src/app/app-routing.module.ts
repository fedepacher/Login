import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
//import { LoginModule } from "./component/login/login.module";
import { RegisterComponent } from "./component/register/register.component";
//import { RegisterModule } from "./component/register/register.module";
import { HomeComponent } from './component/home/home.component';

/**
 * Con esto al ejecutarse en localhost:4200 se muestra app.component que es el
 * default, y se referencia con { path: "", component: AppComponent, pathMatch: "full"},
 * Si se pone localhost:4200/login, me direcciona a path: "login", component: LoginComponent, pathMatch: "full"}, 
 * que ejecutara el login.component
 * Si se pone localhost:4200/register, me direcciona a path: "register", component: RegisterComponent, pathMatch: "full"
 * que ejecuta el register.component
 */
const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "home", component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
