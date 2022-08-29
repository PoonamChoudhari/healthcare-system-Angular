import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateDoctorComponent } from './component/create-update-doctor/create-update-doctor.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

const routes: Routes = [{ path: '', component: LoginSignupComponent },
                        { path: 'doctor', component: DoctorComponent },
                        { path: 'addDoctor', component: CreateUpdateDoctorComponent},
                        { path: 'doctorDashboard', loadChildren: () => import('./doctor-dashboard/doctor-dashboard.module').then(m => m.DoctorDashboardModule) },
                        { path: 'patientDashboard', loadChildren: () => import('./patient-dashboard/patient-dashboard.module').then(m => m.PatientDashboardModule) }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
