import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../classes/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = "http://localhost:8080/api/getAllDoctors";

  constructor( private httpClient: HttpClient) { }

  getDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }
}
