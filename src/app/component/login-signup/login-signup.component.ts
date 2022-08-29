import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  selected = "0";
  doctorRole = 0;
  patientRole = 1;
  isLoginFormShow = true;
  addDoctorForm?: FormGroup;
  addPatientForm?: FormGroup;
  doctorLoginForm?: FormGroup;
  patientLoginForm?: FormGroup;

  constructor(private fb: FormBuilder,
    private doctorService: DoctorService,
    private patienService: PatientService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    localStorage.clear();
    console.log('data removed');
    
    this.doctorLoginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.patientLoginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.addDoctorForm = this.fb.group({
      doctorName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      description: ['', [Validators.required]],
      yearOfExperience: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      consultationFees: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      clinicName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.addPatientForm = this.fb.group({
      patientName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      password: ['', [Validators.required]]
    })
  }

  savePatient() {
    let patientObj = new Patient;

    if (this.addPatientForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      patientObj.patientName = this.addPatientForm?.get('patientName')?.value;
      patientObj.emailId = this.addPatientForm?.get('emailId')?.value;
      patientObj.address = this.addPatientForm?.get('address')?.value;
      patientObj.phone_number = this.addPatientForm?.get('phone_number')?.value;
      patientObj.age = this.addPatientForm?.get('age')?.value;
      patientObj.gender = Number(this.selected);
      patientObj.password = this.addPatientForm?.get('password')?.value;
      patientObj.role = this.patientRole;

      console.log(patientObj);

      this.patienService.registerPatient(patientObj)
      .subscribe((data) => {
        console.log(data);
        if(data){
          this.toastr.success('Patient registred successfully.');
          setTimeout(()=>{
            this.isLoginFormShow = true;
            this.addPatientForm?.reset();
          },2000);
        }
      })

    }
  }

  saveDoctor() {
    let doctorObj = new Doctor;
    console.log(this.addDoctorForm);
    if (this.addDoctorForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      doctorObj.doctorName = this.addDoctorForm?.get('doctorName')?.value;
      doctorObj.address = this.addDoctorForm?.get('address')?.value;
      doctorObj.degree = this.addDoctorForm?.get('degree')?.value;
      doctorObj.speciality = this.addDoctorForm?.get('speciality')?.value;
      doctorObj.description = this.addDoctorForm?.get('description')?.value;
      doctorObj.yearOfExperience = this.addDoctorForm?.get('yearOfExperience')?.value;
      doctorObj.consultation_fees = this.addDoctorForm?.get('consultationFees')?.value;
      doctorObj.phone_number = this.addDoctorForm?.get('mobile')?.value;
      doctorObj.emailId = this.addDoctorForm?.get('emailId')?.value;
      doctorObj.gender = Number(this.selected);
      doctorObj.password = this.addDoctorForm?.get('password')?.value;
      doctorObj.role = this.doctorRole;
      let clinicObj = {
        'clinicName': this.addDoctorForm?.get('clinicName')?.value,
        'address': this.addDoctorForm?.get('address')?.value
      };
      doctorObj.clinic = clinicObj;

      console.log(doctorObj);

      this.doctorService.registerDoctor(doctorObj)
      .subscribe((data) => {
        console.log(data);
        if(data){
          this.toastr.success('Doctor registred successfully.');
          setTimeout(()=>{
            this.isLoginFormShow = true;
            this.addDoctorForm?.reset();
          },2000);
        }
      })
    }
  }

  registerationTapped() {
    this.isLoginFormShow = false;
  }

  doctorLogin(){
    let doctorObj = new Doctor;

    if (this.doctorLoginForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      doctorObj.emailId = this.doctorLoginForm?.get('emailId')?.value;
      doctorObj.password = this.doctorLoginForm?.get('password')?.value;
      this.doctorService.doctorLogin(doctorObj)
      .subscribe((data) => {
        let doctorData = data['data'];
        console.log(doctorData);
        if(data){
          localStorage.setItem('doctorDataObj',JSON.stringify(doctorData));
          this.toastr.success('Doctor logged In successfully.');
          setTimeout(()=>{
            this.router.navigate(['/doctorDashboard']);
          },1000);
        }
      },
      (error) =>{
        this.toastr.error('Email Id/Password is incorrect.');
      }
      );

    }
  }

  patientLogin(){
    let patientObj = new Patient;

    if (this.patientLoginForm?.status == 'INVALID') {
      console.log("invalid");
      this.toastr.error('Please enter correct values!');
    }
    else {
      patientObj.emailId = this.patientLoginForm?.get('emailId')?.value;
      patientObj.password = this.patientLoginForm?.get('password')?.value;
      this.patienService.patientLogin(patientObj)
      .subscribe((data) => {
        let patientData = data['data'];
        console.log(data);
        if(data){
          localStorage.setItem('patientDataObj',JSON.stringify(patientData));
          this.toastr.success('Patient logged In successfully.');
          setTimeout(()=>{
            this.router.navigate(['/patientDashboard/searchDoctor']);
          },2000);
        }
      },
      (error) =>{
        this.toastr.error('Email Id/Password is incorrect.');
      }
      );
  }
}

}
