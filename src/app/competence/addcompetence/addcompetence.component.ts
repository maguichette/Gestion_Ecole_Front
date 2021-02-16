import { Component, OnInit } from '@angular/core';
import {GrpcompetencesService} from '../../grpcompetences.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CompetencesService} from '../../competences.service';

@Component({
  selector: 'app-addcompetence',
  templateUrl: './addcompetence.component.html',
  styleUrls: ['./addcompetence.component.css']
})
export class AddcompetenceComponent implements OnInit {
  groupeCompetence: any;
  selectedItems = [];
  dropdownSettings: any = {};
  // @ts-ignore
  niveau: FormArray;
  // tslint:disable-next-line:max-line-length
 constructor(private router: Router,
             private competence: CompetencesService,
             private grpcompetenceService: GrpcompetencesService,
             private formbuilder: FormBuilder) { }

  formCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descripton: ['', [Validators.required]],
    groupeCompetence: [[], [Validators.required]],
    niveau: this.formbuilder.array([this.createNiveau()])
  });

  ngOnInit(): void {
    this.grpcompetenceService.getGroupCompetence().subscribe(
      (data: any) => {
        this.groupeCompetence = data;

        console.log(this.grpcompetenceService);

        console.log(this.groupeCompetence);
      }
    );
   /* this.postedcompetence = this.formBuilder.group({
      nomCompetence: ['', [Validators.required]],
      groupedAction1: ['', [Validators.required]],
      groupedAction2: ['', [Validators.required]],
      groupedAction3: ['', [Validators.required]],
      critereDevaluation1: ['', [Validators.required]],
      critereDevaluation2: ['', [Validators.required]],
      critereDevaluation3: ['', [Validators.required]],
     description: ['', [Validators.required]]
    });*/


    this.dropdownSettings = {
      primaryKey: 'id',
      singleSelection: false,
      text: 'Select One or More Groupe Competences',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
    this.addniv();

  }
  onSubmit(): any {
    console.log(typeof (this.formCompetence.controls.libelle));
    console.log(this.formCompetence.value);
    const c = {libelle: 'test'};
    this.competence.addcomp(c).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/listcompetence']);
      },
      (error: any) => {
        alert('error');
      });
  }
  createNiveau(): FormGroup {
    return this.formbuilder.group({
      libelle: ['', [Validators.required]],
      groupe_actions: ['', [Validators.required]],
      critere_evaluation: ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line:typedef
  getNiveauxFormGroups() {
    return (this.formCompetence.get('niveau') as FormArray);
  }

  addniv(): any {
    for (let i = 0; i < 2; i++){
      ( this.formCompetence.get('niveau') as FormArray).push(this.createNiveau());
    }
    /* this.niveaux = this.formCompetence.get('niveaux') as FormArray;
    this.niveaux.push(this.createNiveau());*/
  }
 /* // tslint:disable-next-line:typedef
  addCompetence() {
    console.log(this.postedcompetence.value);
    this.competence.addcomp(this.libel).subscribe(data => {
     if (confirm('voulez-vous la page')) {
       this.router.navigate(['/listcompetence']);
     }
   });
  }*/
}
