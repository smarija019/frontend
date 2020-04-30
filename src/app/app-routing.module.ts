import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TypesComponent } from './types/types.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { UsersComponent } from './users/users.component';
import { LawyerComponent } from './lawyer/lawyer.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'users', component: UsersComponent,canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'locations', component: LocationsComponent,canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'types', component: TypesComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin']}},
  { path: 'lawsuits', component: LawsuitsComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin','customer']}},
  { path: 'lawyers', component: LawyerComponent, canActivate: [AuthGuard],data :{permittedRoles:['admin','customer']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
