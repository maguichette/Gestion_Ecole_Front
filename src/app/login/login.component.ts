import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/login.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  loginForm: FormGroup | any;
  fakeAuth = false;
  submitted = false;
  fakeData = false;
  errorMessage = 'login ou mot de passe incorect';

  constructor(private router: Router, private form: FormBuilder, private loginservice: LoginService) {
  }
  // tslint:disable-next-line:typedef
  private decoded: any;
  helper = new JwtHelperService();
  loginform: any;

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: ['', [Validators.required]] ,
      password: ['', [Validators.required]]
    }) ;
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.loginform.controls ;
  }
  // tslint:disable-next-line:typedef
    onSubmit(credentials: NgForm) {
    return this.loginservice.getToken(credentials).subscribe(
      (response: any) => {
        const token = response.token;
        this.decoded = this.helper.decodeToken(token);
        console.log(this.decoded);
        if (this.decoded.archive === false) {
          localStorage.setItem('token', token);
          localStorage.setItem('id', this.decoded.id);
          if (this.decoded.roles[0] === 'ROLE_Formateur') {
            this.router.navigate(['formateur']);
            // tslint:disable-next-line:triple-equals
          } else { // @ts-ignore
            if (this.decoded?.roles[0] === 'ROLE_Admin') {
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
        }
        else {
          console.log('connexion impossible');
        }
      },
    (error: any) => {
        this.fakeData = true;
        return this.errorMessage;
      }
    );
  }
}
