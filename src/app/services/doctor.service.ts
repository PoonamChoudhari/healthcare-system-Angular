import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../classes/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = "http://localhost:8080/api";

  constructor( private httpClient: HttpClient) { }

  getDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}/getAllDoctors`);
  }

  saveDoctor(doctor: Doctor){
    return this.httpClient.post(`${this.baseUrl}/addDoctor`,doctor);
  }

  registerDoctor(doctor: Doctor){
    return this.httpClient.post(`${this.baseUrl}/registerDoctor`,doctor);
  }

  doctorLogin(doctor: Doctor){
    return this.httpClient.post<any>(`${this.baseUrl}/doctorLogin`,doctor);
  }

  updateDoctor(doctorId: number, doctor: Doctor){
    return this.httpClient.put<any>(`${this.baseUrl}/updateDoctorProfile/`+ doctorId, doctor);
  }

  getDoctorById(doctorId: number){
    return this.httpClient.get<any>(`${this.baseUrl}/getDoctorById/`+ doctorId);
  }

  searchDoctorBySpeciality(speciality: string){
    return this.httpClient.get<any>(`${this.baseUrl}/findDoctorBySpeciality?speciality=`+speciality);
  }

  updateSlotAvailability(doctorId: number, doctor: Doctor){
    return this.httpClient.put<any>(`${this.baseUrl}/updateSlotAvailability/`+ doctorId, doctor);
  }
}
