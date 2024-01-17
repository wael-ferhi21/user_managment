import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpadteComponent } from './upadte/upadte.component';

const routes: Routes = [
{path:'signup', component:SignupComponent },
{path:'usersdata',component:ListComponent},
{path:'update/:id',component:UpadteComponent}


];

@NgModule({
  bootstrap: [AppComponent],
  imports: [RouterModule.forRoot(routes),  ReactiveFormsModule,  HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
