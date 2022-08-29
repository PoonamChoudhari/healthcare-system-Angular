import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  selectedPatientProfile: any;
  patientList: any;
  title = "Patients";
  isAddPatient: any;
  localStorageData: any;

  constructor(private route:ActivatedRoute,
    private _router:Router,
    private patientService: PatientService,
    private doctorService: DoctorService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if(localStorage){
    let data = JSON.parse(localStorage.getItem('doctorDataObj') || '[]');
    this.localStorageData = data;
    }

    this.route.queryParams.subscribe(params => {
      this.isAddPatient = params['isAddDoctor'];

      if(this.isAddPatient == 'Y'){
        this.patientService.getPatients()
        .subscribe((data) => {
          console.log(data);
          this.patientList = data;
          if(data){
            // this.toastr.success('Your Profile updated successfully.');
          }
        })
      }
      else if(this.isAddPatient == 'N'){      
        this.doctorService.getDoctorById(this.localStorageData['doctorId'])
        .subscribe((data) => {
          console.log(data);
          this.patientList = data['patients'];
          if(data){
            // this.toastr.success('Your Profile updated successfully.');
          }
        })
          // this.patientList = this.localStorageData['patients'];
      }

    });

  }

  linkPatientToDoctor(_patientId: any){
    this.patientService.linkPatient(_patientId,this.localStorageData['doctorId'])
      .subscribe((data) => {
        console.log(data);
        if(data){
          // this.toastr.success('Your Profile updated successfully.');
        }
      })
  }

  openViewProfileDialog(templateRef: TemplateRef<any>, patient: any) {
      this.selectedPatientProfile = patient;
      this.dialog.open(templateRef);
  }

  viewProfile(patient: any){
    this.selectedPatientProfile = patient;
  }

}
