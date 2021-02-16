import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../Service/profil.service';
import {Profil} from '../profil.modele';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-listprofil',
  templateUrl: './listprofil.component.html',
  styleUrls: ['./listprofil.component.css']
})
export class ListprofilComponent implements OnInit {
  profils: Profil[] = [];
  libelle: any;
  /*libelle = '';*/
  profil: any = [];
  // @ts-ignore
  formGroup: FormGroup;
  constructor(private profilservice: ProfilService , private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: ['', Validators.required]
    });
    this.profilservice.refresNeeded$.subscribe( () => {
      // @ts-ignore
      this.getProfil();
    });
    // tslint:disable-next-line:no-unused-expression
    this.getProfil();
  }
  // tslint:disable-next-line:typedef
  getProfil(){
    this.profilservice.getallprofil().subscribe(
      (data: any) => {
        this.profils = data;
        console.log(this.profils);
      }
    );
  }
  // tslint:disable-next-line:typedef
 redirectToDelete(id: number) {
    if (confirm('voulez vous supprimer le profil??')) {
   this.profilservice. deleteprofil(`${id}`).subscribe(
     () => this.getProfil() );
  }
}
  // tslint:disable-next-line:typedef

}
