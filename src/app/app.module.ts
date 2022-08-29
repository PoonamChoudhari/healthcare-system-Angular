import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { DoctorComponent } from './component/doctor/doctor.component';
import { CreateUpdateDoctorComponent } from './component/create-update-doctor/create-update-doctor.component';
import { FormsModule,  ReactiveFormsModule }  from  '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './component/profile/profile.component';
import { PatientDashboardModule } from './patient-dashboard/patient-dashboard.module';
import { DoctorDashboardModule } from './doctor-dashboard/doctor-dashboard.module';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    CreateUpdateDoctorComponent,
    LoginSignupComponent,
    ProfileComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
