import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: AllTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
