import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import { SlotAvailabilityComponent } from '../component/slot-availability/slot-availability.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    PatientComponent,
    HeaderComponent,
    SlotAvailabilityComponent
  ],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
    // HeaderComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class DoctorDashboardModule { }
