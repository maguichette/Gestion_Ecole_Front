import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../Service/profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {
  libelle = '';
  profil: any = [];
  // @ts-ignore
  formGroup: FormGroup;
  profilExist = false;

  constructor(private profilservice: ProfilService , private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  adProfil(){
    /* console.log(this.libelle);*/
    this.profilservice.addprofil(this.libelle).subscribe(data => {
      alert(
        'success'
      );
      this.libelle = '';
    }, error => {
      this.profilExist = true;
    });


  }

}
