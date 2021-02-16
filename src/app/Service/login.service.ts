import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FormGroup} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokendecode: any;
  currentUserValue: any;
  constructor(private http: HttpClient, private router: Router) { }
  baserl = environment.baseurl;
  helper = new JwtHelperService();


  // tslint:disable-next-line:typedef
  private decoded: string | undefined;

  // tslint:disable-next-line:typedef
  login(email: FormGroup, password: FormGroup) {
    // @ts-ignore
    // @ts-ignore
    /*console.log('cvbbn,;;kjhgfddfgh');*/
    return this.http.post(this.baserl + '/login', {
      email, password
    }).pipe(
      map((response: any) => {

       // alert('on');
        this.decoded = this.helper.decodeToken(response.token);
        console.log(this.decoded);
        localStorage.setItem('token', response.token);
        // console.log(this.roles);
        // @ts-ignore
        console.log(this.decoded.roles[0]);
        // tslint:disable-next-line:triple-equals
        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (this.decoded.roles[0] === 'ROLE_Formateur') {
          this.router.navigate(['formateur']);
          // tslint:disable-next-line:triple-equals
        } else { // @ts-ignore
          if (this.decoded.roles[0] === 'ROLE_Admin') {
            // console.log("je sui admin");
            this.router.navigate(['/listuser']);
            // tslint:disable-next-line:triple-equals
          } else { // @ts-ignore
            // tslint:disable-next-line:triple-equals
            if (this.decoded.roles[0] === 'ROLE_CM') {
              this.router.navigate(['cm']);
              // tslint:disable-next-line:triple-equals
            } else { // @ts-ignore
              // tslint:disable-next-line:triple-equals
              if (this.decoded.roles[0] === 'ROLE_Apprenant') {
                this.router.navigate(['apprenant']);
              } else {
                console.log('not matched data');
              }
            }
          }
        }
      })
    );
  }
  public getToken(credentials: any): any {
    return this.http.post(this.baserl + '/login', credentials);
  }
}
