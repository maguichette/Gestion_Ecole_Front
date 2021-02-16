import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrpcompetencesService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getGroupCompetence() {
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences/competences');
  }
  // tslint:disable-next-line:typedef
  getAllGroupCompetence() {
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences');
  }
}
