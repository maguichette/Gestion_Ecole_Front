import {Component, Input, OnInit} from '@angular/core';
import {GrpcompetencesService} from '../../grpcompetences.service';
import {Router} from '@angular/router';
import {Groupecompetence} from '../groupecomepence.model';


@Component({
  selector: 'app-listgrpcompetence',
  templateUrl: './listgrpcompetence.component.html',
  styleUrls: ['./listgrpcompetence.component.css']
})
export class ListgrpcompetenceComponent implements OnInit {

  grpcompetence: any;
  grpeCompetences = [];
  p = 1;

  constructor(private grpcompetenceService: GrpcompetencesService , private router: Router) { }

  ngOnInit(): void {
    this.grpcompetenceService.getGroupCompetence().subscribe(
      (data: any) => {
        this.grpcompetence = data;
        console.log(this.grpcompetence);
      });
      }

}
