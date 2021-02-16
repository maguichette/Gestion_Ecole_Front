import { Component, OnInit } from '@angular/core';
import {Profilsortie } from './profilsortie.modele';
import {ProfilsortieService} from '../../profilsortie.service';
import {ProfilSortieComponent} from '../profil-sortie.component';


@Component({
  selector: 'app-listprofilsortie',
  templateUrl: './listprofilsortie.component.html',
  styleUrls: ['./listprofilsortie.component.css']
})
export class ListprofilsortieComponent implements OnInit {
  profilsortis: Profilsortie[] = [] ;

  constructor(private profilsortieservice: ProfilsortieService) { }

  ngOnInit(): void {
          this.profilsortieservice.getprofilsortie().subscribe(
        (data: any) => {
          this.profilsortis = data;
          console.log(this.profilsortis);
        }
      );
     }
}
