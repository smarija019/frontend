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


const routes: Routes = [ 
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard]},
  { path: 'locations', component: LocationsComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'types', component: TypesComponent},
  { path: 'lawsuits', component: LawsuitsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
