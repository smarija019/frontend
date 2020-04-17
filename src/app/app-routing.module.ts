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
import { LitigationsComponent } from './litigations/litigations.component';


const routes: Routes = [ 
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'types', component: TypesComponent},
  { path: 'litigations', component: LitigationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
