import { Component, OnInit } from '@angular/core';
import {ProfilsortieService} from '../../profilsortie.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editprofilsortie',
  templateUrl: './editprofilsortie.component.html',
  styleUrls: ['./editprofilsortie.component.css']
})
export class EditprofilsortieComponent implements OnInit {
 constructor(private activateRoute: ActivatedRoute, private profilsortie: ProfilsortieService) { }
  public profil: any;
  private id: any;

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id'); // recuper la valeur de l'id
    // convertir l'id en int: en ajoutant un plus
   /* this.profilsortie.getProfilsortieById(+this.id).subscribe(
      (data: any) => {
        this.profil = data;
        console.log(this.profil);
        const libelle = document.getElementById('libelle');
        // @ts-ignore
        libelle.value = this.profil.libelle;
      }
    );*/
    console.log(this.id);
  }
  // tslint:disable-next-line:typedef
  update(onUpdate: any) {
    const req = this.activateRoute.snapshot.params.id;
    console.log(req);
    console.log(onUpdate.value);
    this.profilsortie.modifier(req, onUpdate.value)
      .subscribe((edited: any ) => {
        console.log(edited)  ;
      });
  }
}
