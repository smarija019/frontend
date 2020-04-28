
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RegistrationComponent } from './registration/registration.component';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiService } from './api.service';
import { LocationsComponent } from './locations/locations.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TypesComponent } from './types/types.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyDialogboxComponent } from './company-dialogbox/company-dialogbox.component';
import { LocationDialogboxComponent } from './location-dialogbox/location-dialogbox.component';
import { ContactDialogboxComponent } from './contact-dialogbox/contact-dialogbox.component';
import { UsersComponent } from './users/users.component';
import { UserDialogboxComponent } from './user-dialogbox/user-dialogbox.component';
import { LawsuitDialogboxComponent } from './lawsuit-dialogbox/lawsuit-dialogbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LocationsComponent,
    CompaniesComponent,
    ContactsComponent,
    TypesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LawsuitsComponent,
    DialogboxComponent,
    CompanyDialogboxComponent,
    LocationDialogboxComponent,
    ContactDialogboxComponent,
    UsersComponent,
    UserDialogboxComponent,
    LawsuitDialogboxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,

    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NgbModule,

  ],
  providers: [ApiService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  exports: [MatSliderModule,
    MatNativeDateModule,

    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    HttpClientModule,

  ],
  entryComponents: [
    DialogboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
