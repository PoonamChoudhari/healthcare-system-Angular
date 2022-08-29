import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  @Input() doctors?: Doctor[];
  clinicName: any;
  title = "Doctors"
  isDoctorList: any;

  constructor(private doctorService: DoctorService,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.isDoctorList = params['isDoctorList'];
      if(this.isDoctorList == 'Y'){
        this.doctorService.getDoctors()
        .subscribe((data: Doctor[]) => {
          console.log('doctor data list -----',data);
          this.doctors = data;
        });
      }
      
    });
    
  }

  getClinicName(doctor: any){
    this.clinicName = doctor.clinic.clinicName;
    return true;
  }

}
