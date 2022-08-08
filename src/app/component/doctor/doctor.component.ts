import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctors: Doctor[] | undefined;
  clinicName: any;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors()
    .subscribe((data: Doctor[]) => {
      console.log('doctor data list -----',data);
      this.doctors = data;
    });
  }

  getClinicName(doctor: any){
    console.log(doctor.clinic.clinicName);
    this.clinicName = doctor.clinic.clinicName;
    return true;
  }

}
