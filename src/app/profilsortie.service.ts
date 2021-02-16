import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilsortieService {
  private userlurl = environment.baseurl + '/admin/profil_sorties';

  constructor(private http: HttpClient) { }

  getprofilsortie(): any{
    return this.http.get(`http://127.0.0.1:8000/api/admin/profil_sorties`);
  }
  /*getProfilsortieById(id: number): any{
    return this.http.get(`http://127.0.0.1:8000/api/admin/profils_sorties/${id}`);
  }*/
  modifier(id: number, user: string): any{
    return this.http.put(`http://127.0.0.1:8000/api/admin/profils_sorties/${id}`, user);
  }
 /* modifier(id: number , user: string): any{
    // @ts-ignore
    return this.http.put(`http://127.0.0.1:8000/api/admin/profils_sorties/${id}`, user);
  }*/
}
