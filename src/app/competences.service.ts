import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
 /* getGroupCompetence() {
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences');
  }*/
  // tslint:disable-next-line:typedef
  getC(id: number){
    return this.http.get(`http://127.0.0.1:8000/api/groupe_competences/${id}/competences`);
  }
  // tslint:disable-next-line:typedef
  addcomp(libelle: any ){
    return this.http.post(`http://127.0.0.1:8000/api/admin/competences`, {libelle});
  }
}
