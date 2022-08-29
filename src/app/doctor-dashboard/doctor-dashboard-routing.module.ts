import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from '../component/patient/patient.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { SlotAvailabilityComponent } from '../component/slot-availability/slot-availability.component';
import { DoctorDashboardComponent } from './doctor-dashboard.component';

const routes: Routes = [{ path: '', 
                          component: DoctorDashboardComponent,
                          'children':[
                            { path: 'patientList', component:PatientComponent },
                            { path: 'addPatient', component:PatientComponent },
                            { path: 'doctorProfile', component:ProfileComponent },
                            { path: 'slotAvailability', component:SlotAvailabilityComponent}
                          ]
                         },
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorDashboardRoutingModule { }
