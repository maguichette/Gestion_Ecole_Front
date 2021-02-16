import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user/usermodele';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userlurl = environment.baseurl + '/admin/users';
 constructor(private http: HttpClient) { }
  // tslint:disable-next-line:variable-name
  private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
  get refresNeeded$() {
    return this._refresNeeded$ ;
  }
  // tslint:disable-next-line:typedef
 getuser(): any{
   return this.http.get('http://127.0.0.1:8000/api/admin/users?archive=false');
 }
  // tslint:disable-next-line:typedef
  deleteUser(id: number){
    return this.http.delete(`http://127.0.0.1:8000/api/admin/users/${id}`).pipe(
      tap(() => {
        this._refresNeeded$.next();
      })
    );
  }
  adduser(user: any): any{
    return this.http.post(`http://127.0.0.1:8000/api/admin/users`, user).pipe(
      tap(() => {
        this._refresNeeded$.next();
      })
    );
   /* console.log('oki');*/
  }
  // tslint:disable-next-line:typedef
  getUserId(id: number ){
   return this.http.get(`http://127.0.0.1:8000/api/admin/users/${id}`);
  }
  modifier(id: number, user: string): any{
    return this.http.put(`http://127.0.0.1:8000/api/admin/users/${id}`, user).pipe(
      tap(() => {
        this._refresNeeded$.next();
      })
    );
  }
}
