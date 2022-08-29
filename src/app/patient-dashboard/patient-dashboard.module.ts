import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { PatientComponent } from '../component/patient/patient.component';
import { HeaderComponent } from '../component/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DoctorDashboardModule } from '../doctor-dashboard/doctor-dashboard.module';
import { SearchDoctorComponent } from '../component/search-doctor/search-doctor.component';
import { AppModule } from '../app.module';
import { DoctorComponent } from '../component/doctor/doctor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PatientDashboardComponent,
    SearchDoctorComponent,
    // PatientComponent,
    // HeaderComponent
    DoctorComponent
  ],
  imports: [
    CommonModule,
    PatientDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatTooltipModule,
    DoctorDashboardModule,
    FormsModule,
    ReactiveFormsModule
    // HeaderComponent
  ],
  exports:[
    // HeaderComponent
  ]
})
export class PatientDashboardModule { }
