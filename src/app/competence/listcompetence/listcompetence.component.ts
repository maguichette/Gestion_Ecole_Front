import { Component, OnInit } from '@angular/core';
import {Competences} from '../competences.model';
import {CompetencesService} from '../../competences.service';
import {GrpcompetencesService} from '../../grpcompetences.service';

@Component({
  selector: 'app-listcompetence',
  templateUrl: './listcompetence.component.html',
  styleUrls: ['./listcompetence.component.css']
})
export class ListcompetenceComponent implements OnInit {

  constructor(private  grpcompetenceService: GrpcompetencesService, private competenceService: CompetencesService) { }
  groupeCompetence: any;
  competences: any = [];
  niveaux: any = [];

  // tslint:disable-next-line:typedef
  p = 1;


  ngOnInit(): void {
    this.grpcompetenceService.getGroupCompetence().subscribe(
      (data: any) => {
        this.groupeCompetence = data;
        console.log('ok');
        console.log(this.groupeCompetence);
      }
    );
  }
  // tslint:disable-next-line:typedef
  chargecompetence(id: any) {
    this.competences = [];
    return this.competenceService.getC(id).subscribe(
      (data: any) => {
        this.competences = data;
        console.log(this.competences);
      }
    );
  }

  openNiveau(index: number): any {
   /* alert('ok');*/
    this.niveaux = [];
    const clickedcompetence = this.competences[index];
    console.log(clickedcompetence);
    for (const n of clickedcompetence.niveau){
      this.niveaux.push(n);
    }
    console.log(this.niveaux);
  }
  // tslint:disable-next-line:typedef

}
