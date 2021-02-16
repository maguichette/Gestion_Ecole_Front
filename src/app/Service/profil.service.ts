import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {retry, tap} from 'rxjs/operators';

class Profil {
}

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private profilurl = environment.baseurl + '/admin/profils';

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:variable-name
  private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
  get refresNeeded$() {
    return this._refresNeeded$ ;
  }
  // tslint:disable-next-line:typedef
 getallprofil() {
    return this.http.get('http://127.0.0.1:8000/api/admin/profils?statut=0');
 }
 modifier(id: number , user: string): any{
    // @ts-ignore
   return this.http.put(`http://127.0.0.1:8000/api/admin/profils/${id}`, user).pipe(
     tap(() => {
       this._refresNeeded$.next();
     })
   );
}
  getProfilById(id: number): any{
    return this.http.get(`http://127.0.0.1:8000/api/admin/profils/${id}`);
  }
  // tslint:disable-next-line:typedef
  addprofil(libelle: string){
  return this.http.post(`http://127.0.0.1:8000/api/admin/profils`, {libelle}).pipe(
    tap(() => {
      this._refresNeeded$.next();
    })
  );
  }

  // tslint:disable-next-line:typedef
  deleteprofil(id: string){
  return this.http.delete(`http://127.0.0.1:8000/api/admin/profils/${id}`).pipe(
    tap(() => {
      this._refresNeeded$.next();
    })
  );
}
}
