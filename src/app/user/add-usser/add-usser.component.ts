import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../usermodele';


@Component({
  selector: 'app-add-usser',
  templateUrl: './add-usser.component.html',
  styleUrls: ['./add-usser.component.css']
})
export class AddUsserComponent implements OnInit {

  constructor(private userservice: UserService) { }
 users: User | any;
 selectfile: any;
  userForm: any;

  onchangefil(event: any): any {
    this.selectfile = event.target.files[0];
    /* if (event.target.files.length)
    console.log(this.selectfile);*/
  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      prenom: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmepassword: new FormControl(null, Validators.required),
      avatar: new FormControl(null, Validators.required),
      profil: new FormControl(null, Validators.required)
    });
  }

    onAdduser(): any  {
    const formValue = this.userForm.value;
    console.log(this.users);
    console.log(this.userForm.value);
    const form = new FormData();
    for ( const key of Object.keys(formValue) ) {
      // tslint:disable-next-line:triple-equals
        if (key != 'avatar'){
          const value = formValue[key];
          form.append(key, value);
        }

      }
    form.append('avatar', this.selectfile);

      // console.log(this.avatar);
      // .append('avatar', this.selectedFile, this.selectedFile.name);
    console.log(form);
    this.userservice.adduser(form).subscribe(
      (response: any ) => {
          console.log(response);
        }, (error: any) => {
          console.log(error);
        }
      );
    this.userservice.adduser(form).subscribe(
        (data: any) => {
        console.log(data); }
    );
  }
}
