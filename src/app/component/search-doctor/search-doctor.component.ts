import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.scss']
})
export class SearchDoctorComponent implements OnInit {

  searchDoctorList?: Doctor[];
  searchDoctorForm = new FormControl('', [Validators.required]);

  constructor(private doctorService: DoctorService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {

  }

  searchClicked(){
    if(this.searchDoctorForm.value){
      this.doctorService.searchDoctorBySpeciality(this.searchDoctorForm.value)
      .subscribe((data) => {
        this.searchDoctorList = data;
        console.log(data);
        this.searchDoctorForm.reset();
        // setValue('');
        // if(data){
        //   localStorage.setItem('doctorDataObj',JSON.stringify(doctorData));
        //   // this.toastr.success('Doctor logged In successfully.');
        // }
      }
      );
  }
  else{
    this.toastr.error("Please enter Speciality to search.");
  }
    }
    

  searchSpeciality(speciality: any){
    this.doctorService.searchDoctorBySpeciality(speciality)
      .subscribe((data) => {
        console.log(data);
        if(data.length == 0){
          this.toastr.warning('Records not found for given speciality.');
        }
        else{
          this.searchDoctorList = data;
        }
      },
      (error) =>{
        // this.toastr.error('Email Id/Password is incorrect.');
      }
      );
  }

}
