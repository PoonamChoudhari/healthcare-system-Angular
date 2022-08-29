import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-slot-availability',
  templateUrl: './slot-availability.component.html',
  styleUrls: ['./slot-availability.component.scss']
})
export class SlotAvailabilityComponent implements OnInit {

  localStorageData: any;
  startDateForm = new FormControl('');
  endDateForm = new FormControl('');
  timeSlotArr: any;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    if (localStorage) {
      let data = JSON.parse(localStorage.getItem('doctorDataObj') || '[]');
      this.localStorageData = data;
      let tempSlotArr: any = [];
      let diff = ((this.localStorageData['end_time'] - this.localStorageData['start_time']) / 1000) / 60;

      let totalSlots = diff / Number(this.localStorageData['visit_duration']) ;

      let temInterval = Number(this.localStorageData['start_time']);

      for(let i=0; i<totalSlots;i++){
        let si = temInterval;
        temInterval = si + 15 *60000;
        console.log(si);
        tempSlotArr.push(si);
      }

      this.timeSlotArr = tempSlotArr;


      this.startDateForm.setValue(this.localStorageData['10:00']);
      console.log(this.localStorageData);
      console.log(7200000 / 60);
      let a = 1661744755066
      console.log()

    }
  }

  tapped() {
    let startDate = new Date();
    let endDate = new Date();
    let startArr = (this.startDateForm.value).split(":")
    startDate.setHours(startArr[0]);
    startDate.setMinutes(startArr[1]);

    let startInterval = startDate.getTime();

    console.log('start----------', startInterval);

    let endArr = (this.endDateForm.value).split(":")
    endDate.setHours(endArr[0]);
    endDate.setMinutes(endArr[1]);

    let endInterval = endDate.getTime();

    console.log('end----------', endInterval);

    let diff = ((endInterval - startInterval) / 1000) / 60;

    let totalSlots = diff / 15;

    for(let i=0; i<totalSlots;i++){
      let si = startInterval + 15 * 60000;
      startInterval = si;
      console.log(si);
    }


    // console.log((this.startDateForm.value).split(":"));

    // console.log(startInterval + 15*60000 );

    // console.log(diff);

    let doctor = new Doctor;

    // doctor.start_time = startInterval.toString();
    // doctor.end_time = endInterval.toString();
    // doctor.visit_duration = '15';
    // this.doctorService.updateSlotAvailability(this.localStorageData['doctorId'], doctor)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });


  }




}
