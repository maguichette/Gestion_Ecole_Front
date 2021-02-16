import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {User} from '../usermodele';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  constructor(private userservice: UserService, private route: ActivatedRoute , private router: Router) { }
  users: any = [];
  search = '';
  usersSearch: any;
  /* Oncreate() {

  }*/
  p = 1;
  /*displayedColumns: string [] = ['avatar', 'nom', 'prenom', 'email', 'telephone', 'adresse', 'profil' , 'update', 'delete'];
*/
  ngOnInit(): void {
   /* console.log(this.users);*/
    this.userservice.refresNeeded$.subscribe( () => {
      // @ts-ignore
      this.getAllUsers();
    });
    this.getAllUsers() ;
  }
  // tslint:disable-next-line:typedef
  public getAllUsers() {
    this.userservice.getuser().subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
      });
  }

  // tslint:disable-next-line:typedef
  ToSearch(){
        // tslint:disable-next-line:triple-equals
    if (this.search == '') {
      this.ngOnInit();
    } else {
      // if research
      this.userservice.getuser().subscribe(
          (data: any) => {
        this.usersSearch = data;

        this.users = Object.values(this.usersSearch).filter( (res: any) => {
          return res.nom.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
          return res.prenom.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        });
      });
    }
  }
  redirectToDelete(id: number): void {
    if (confirm('veillez confirmer la suppression')) {

      // @ts-ignore
      this.userservice.deleteUser(id).subscribe(
        (res: any) => {
          return this.router.navigate(['/listuser']);
        });
    }
  }


    getUserById(id: number): any {
  }


}
