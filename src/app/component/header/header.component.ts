import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  profileName: any;
  isDoctorLoggedIn?: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    if(localStorage.getItem('doctorDataObj')){
      let data = JSON.parse(localStorage.getItem('doctorDataObj') || '[]');
      this.profileName = data['doctorName'];
      this.isDoctorLoggedIn = true;
    }
    else if(localStorage.getItem('patientDataObj')){
      let data = JSON.parse(localStorage.getItem('patientDataObj') || '[]');
      this.profileName = data['patientName'];
      this.isDoctorLoggedIn = false;
    }
  }

  patientList(){
    this.router.navigate(['/doctorDashboard/patientList'], { queryParams: {isAddDoctor:'N'}});
  }

  doctorList(){
    this.router.navigate(['/patientDashboard/doctorList'], { queryParams: {isDoctorList:'Y'}});
  }

  addPatientToDoctor(){
    this.router.navigate(['/doctorDashboard/addPatient'], { queryParams: {isAddDoctor:'Y'}});
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
