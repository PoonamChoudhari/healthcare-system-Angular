import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-create-update-doctor',
  templateUrl: './create-update-doctor.component.html',
  styleUrls: ['./create-update-doctor.component.scss']
})
export class CreateUpdateDoctorComponent implements OnInit {

  title = 'Add Doctor';
  addDoctorForm?: FormGroup;

  constructor(private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router){}

  ngOnInit(): void {
    this.addDoctorForm = this.fb.group({
      doctorName: ['', [Validators.required]],
      address:  ['', [Validators.required]],
      degree:  ['', [Validators.required]],
      speciality:  ['', [Validators.required]],
      description:  ['', [Validators.required]],
      yearOfExperience:  ['', [Validators.required]],
      consultationFees:  ['', [Validators.required]],
      clinicName:  ['', [Validators.required]]
    });
  }

  saveDoctor(){
    let doctorObj = new Doctor;
    doctorObj.doctorName = this.addDoctorForm?.get('doctorName')?.value;
    doctorObj.address = this.addDoctorForm?.get('address')?.value;
    doctorObj.degree = this.addDoctorForm?.get('degree')?.value;
    doctorObj.speciality = this.addDoctorForm?.get('speciality')?.value;
    doctorObj.description = this.addDoctorForm?.get('description')?.value;
    doctorObj.yearOfExperience = this.addDoctorForm?.get('yearOfExperience')?.value;
    doctorObj.consultation_fees = this.addDoctorForm?.get('consultationFees')?.value;
    let clinicObj = {'clinicName':this.addDoctorForm?.get('clinicName')?.value,
                      'address': this.addDoctorForm?.get('address')?.value};
    doctorObj.clinic = clinicObj;

    console.log(doctorObj);

    this.doctorService.saveDoctor(doctorObj)
    .subscribe((data) => {
      console.log(data);
      if(data){
        this.router.navigate(['/doctor']);
      }
      
    })



  }

}
