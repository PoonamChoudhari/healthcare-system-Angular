import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/classes/doctor';
import { Patient } from 'src/app/classes/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  updateDoctorForm?: FormGroup;
  updatePatientForm?: FormGroup;
  doctorProfile: any;
  patientProfile: any;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private patientService: PatientService) { }

  ngOnInit(): void {

    if(localStorage){
      if(localStorage.getItem('doctorDataObj')){
        this.doctorProfile = JSON.parse(localStorage.getItem('doctorDataObj') || '[]');
        this.updateDoctorForm = this.fb.group({
          doctorName: ['', [Validators.required]],
          address: ['', [Validators.required]],
          degree: ['', [Validators.required]],
          speciality: ['', [Validators.required]],
          yearOfExperience: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          consultationFees: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          clinicName: ['', [Validators.required]],
          mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          emailId: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
        });
    
        this.setDefaultValuesForDoctorProfile();
      }
      else if(localStorage.getItem('patientDataObj')){
        this.patientProfile = JSON.parse(localStorage.getItem('patientDataObj') || '[]');
        this.updatePatientForm = this.fb.group({
          patientName: ['', [Validators.required]],
          address: ['', [Validators.required]],
          age: ['', [Validators.required]],
          mobile: ['', [Validators.required]]
        });
    
        this.setDefaultValuesForPatientProfile();
      }
    }
  }

  setDefaultValuesForPatientProfile(){
    this.updatePatientForm?.get('patientName')?.setValue(this.patientProfile['patientName']);
    this.updatePatientForm?.get('address')?.setValue(this.patientProfile['address']);
    this.updatePatientForm?.get('age')?.setValue(this.patientProfile['age']);
    this.updatePatientForm?.get('mobile')?.setValue(this.patientProfile['phone_number']);
  }

  setDefaultValuesForDoctorProfile(){
    this.updateDoctorForm?.get('doctorName')?.setValue(this.doctorProfile['doctorName']);
    this.updateDoctorForm?.get('address')?.setValue(this.doctorProfile['address']);
    this.updateDoctorForm?.get('degree')?.setValue(this.doctorProfile['degree']);
    this.updateDoctorForm?.get('speciality')?.setValue(this.doctorProfile['speciality']);
    this.updateDoctorForm?.get('description')?.setValue(this.doctorProfile['description']);
    this.updateDoctorForm?.get('yearOfExperience')?.setValue(this.doctorProfile['yearOfExperience']);
    this.updateDoctorForm?.get('consultationFees')?.setValue(this.doctorProfile['consultation_fees']);
    this.updateDoctorForm?.get('mobile')?.setValue(this.doctorProfile['phone_number']);
    this.updateDoctorForm?.get('emailId')?.setValue(this.doctorProfile['emailId']);
    this.updateDoctorForm?.get('password')?.setValue(this.doctorProfile['password']);
    this.updateDoctorForm?.get('clinicName')?.setValue(this.doctorProfile['clinic']['clinicName']);
  }

  savePatient(){
    let patientObj = new Patient;
    if (this.updatePatientForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      patientObj.patientName = this.updatePatientForm?.get('patientName')?.value;
      patientObj.address = this.updatePatientForm?.get('address')?.value;
      patientObj.age = this.updatePatientForm?.get('age')?.value;
      patientObj.phone_number = this.updatePatientForm?.get('mobile')?.value;

      console.log(patientObj);

      this.patientService.updatePatient(this.patientProfile['patientId'],patientObj)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('patientDataObj',JSON.stringify(data));
        if(data){
          this.toastr.success('Your Profile updated successfully.');
        }
      })
    }
  }

  saveDoctor() {
    let doctorObj = new Doctor;
    if (this.updateDoctorForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      doctorObj.doctorName = this.updateDoctorForm?.get('doctorName')?.value;
      doctorObj.address = this.updateDoctorForm?.get('address')?.value;
      doctorObj.degree = this.updateDoctorForm?.get('degree')?.value;
      doctorObj.speciality = this.updateDoctorForm?.get('speciality')?.value;
      doctorObj.yearOfExperience = this.updateDoctorForm?.get('yearOfExperience')?.value;
      doctorObj.consultation_fees = this.updateDoctorForm?.get('consultationFees')?.value;
      doctorObj.phone_number = this.updateDoctorForm?.get('mobile')?.value;
      let clinicObj = {
        'clinicName': this.updateDoctorForm?.get('clinicName')?.value,
        'address': this.updateDoctorForm?.get('address')?.value
      };
      doctorObj.clinic = clinicObj;

      console.log(doctorObj);

      this.doctorService.updateDoctor(this.doctorProfile['doctorId'],doctorObj)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('doctorDataObj',JSON.stringify(data));
        if(data){
          this.toastr.success('Your Profile updated successfully.');
        }
      })
    }
  }

}
