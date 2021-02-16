import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {ProfilService} from '../../Service/profil.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {
  profilreq: any = [];
  updated: any = [];
 constructor(private activateRoute: ActivatedRoute,  private profilservice: ProfilService) { }
 public profil: any;
 private id: any;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id'); // recuper la valeur de l'id
    // convertir l'id en int: en ajoutant un plus
    this.profilservice.getProfilById(+this.id).subscribe(
        (data: any) => {
          this.profil = data;
          console.log(this.profil);
          const libelle = document.getElementById('libelle');
          // @ts-ignore
          libelle.value = this.profil.libelle;
      }
      );
    /*this.activateRoute.params.subscribe(
      (p: Params) => {
        const req =  +this.activateRoute.snapshot.params.id ;
        // console.log(recupid) ;
        this.profilreq = this.profilservice.getProfilById(req).subscribe( data => {

          // @ts-ignore
          this.updated = data ;
        }) ;
      }
    );*/
  }

  // tslint:disable-next-line:typedef
  update(onUpdate: NgForm) {
    /*console.log('tttr');*/
    const req = this.activateRoute.snapshot.params.id;
    console.log(req);
    console.log(onUpdate.value);
    this.profilservice.modifier(req, onUpdate.value)
      .subscribe((edited: any ) => {
     console.log(edited)  ;
    });
  }
}
