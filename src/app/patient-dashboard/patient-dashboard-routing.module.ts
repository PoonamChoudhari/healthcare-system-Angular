import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from '../component/doctor/doctor.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { SearchDoctorComponent } from '../component/search-doctor/search-doctor.component';
import { PatientDashboardComponent } from './patient-dashboard.component';

const routes: Routes = [{ path: '', component: PatientDashboardComponent,
'children':[
  { path: 'patientProfile', component:ProfileComponent },
  { path: 'doctorList', component:DoctorComponent },
  { path: 'searchDoctor', component:SearchDoctorComponent },
]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDashboardRoutingModule { }
