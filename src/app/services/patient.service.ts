import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../classes/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api";

  constructor( private httpClient: HttpClient) { }

  getPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/getAllPatients`);
  }

  addPatient(patient: Patient){
    return this.httpClient.post(`${this.baseUrl}/addPatient`,patient);
  }

  registerPatient(patient: Patient){
    return this.httpClient.post(`${this.baseUrl}/registerPatient`,patient);
  }

  patientLogin(patient: Patient){
    return this.httpClient.post<any>(`${this.baseUrl}/patientLogin`,patient);
  }

  linkPatient(patientId: number, doctorId: number){
    return this.httpClient.put(`${this.baseUrl}/updatePatientByDoctor/patientId/`+patientId+`/doctorId/`+doctorId,null);
  }

  updatePatient(patientId: number, patient: Patient){
    return this.httpClient.put<any>(`${this.baseUrl}/updatePatientProfile/`+ patientId, patient);
  }
}
