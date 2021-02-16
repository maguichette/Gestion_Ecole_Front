import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  prenom: any;
  nom: any;
  password: any;
  email: any;

  constructor(private activateRoute: ActivatedRoute, private userservice: UserService) { }

  public user: any;
  private id: any;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id'); // recuper la valeur de l'id
    // convertir l'id en int: en ajoutant un plus
    this.userservice.getUserId(+this.id).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
        const prenom = document.getElementById('prenom');
        // @ts-ignore
        prenom.value = this.user.prenom;
        const nom = document.getElementById('nom');
        // @ts-ignore
        nom.value = this.user.nom;
        const password = document.getElementById('password');
        // @ts-ignore
        password.value = this.user.password;
        const email = document.getElementById('email');
        // @ts-ignore
        email.value = this.user.email;
        const selection = document.getElementById('selection');
              // @ts-ignore
        selection.value = this.user.profil.libelle;
        const fichier = document.getElementById('fichier');
        // @ts-ignore
        fichier.value = this.user.avatar;
      }
    );
  }
  // tslint:disable-next-line:typedef
  update(onUpdate: NgForm) {
    /*console.log('tttr');*/
    const req = this.activateRoute.snapshot.params.id;
    console.log(req);
    console.log(onUpdate.value);
    this.userservice.modifier(req, onUpdate.value)
      .subscribe((edited: any ) => {
        console.log(edited)  ;
      });
  }

}
