import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {AddUsserComponent} from './user/add-usser/add-usser.component';
import {ListprofilComponent} from './profil/listprofil/listprofil.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ListuserComponent} from './user/listuser/listuser.component';
import {AddprofilComponent} from './profil/addprofil/addprofil.component';
import {EditprofilComponent} from './profil/editprofil/editprofil.component';
import {DetailUserComponent} from './user/detail-user/detail-user.component';
import {ListprofilsortieComponent} from './profil-sortie/listprofilsortie/listprofilsortie.component';
import {AddprofilsortieComponent} from './profil-sortie/addprofilsortie/addprofilsortie.component';
import {EditprofilsortieComponent} from './profil-sortie/editprofilsortie/editprofilsortie.component';
import {ListcompetenceComponent} from './competence/listcompetence/listcompetence.component';
import {AddcompetenceComponent} from './competence/addcompetence/addcompetence.component';
import {GroupecompetenceComponent} from './groupecompetence/groupecompetence.component';
import {ItemsgrpComponent} from './groupecompetence/listgrpcompetence/itemsgrp/itemsgrp.component';
import {ListpromoComponent} from './Promo/listpromo/listpromo.component';
import {ListreferentielComponent} from './referentiel/listreferentiel/listreferentiel.component';
import {EditcompetenceComponent} from './competence/editcompetence/editcompetence.component';
import {LoginGuard} from './service/login/login.guard';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'header', component: HeaderComponent},
  {path: 'add-user', canActivate: [LoginGuard], component: AddUsserComponent},
  {path: 'listprofil', component: ListprofilComponent,
    children: [
      {path: 'addprofil',  canActivate: [LoginGuard], component: AddprofilComponent},
      {path: 'editprofil/:id', canActivate: [LoginGuard], component: EditprofilComponent},

    ]
  },
  {path: 'edituser', canActivate: [LoginGuard], component: EditUserComponent},
  {path: 'listuser', canActivate: [LoginGuard], component: ListuserComponent},
  {path: 'detailuser/:id', canActivate: [LoginGuard], component: DetailUserComponent},
  {path: 'listprofilsortie', canActivate: [LoginGuard], component: ListprofilsortieComponent },
  {path: 'addprofilsortie', canActivate: [LoginGuard], component: AddprofilsortieComponent},
  {path: 'editprofilsortie/:id', canActivate: [LoginGuard], component: EditprofilsortieComponent},
  {path: 'listcompetence', canActivate: [LoginGuard], component: ListcompetenceComponent},
  {path: 'addcompetence', canActivate: [LoginGuard], component: AddcompetenceComponent},
  {path: 'listgroupecomp', canActivate: [LoginGuard], component: GroupecompetenceComponent},
  {path: 'listetem', canActivate: [LoginGuard], component: ItemsgrpComponent},
  {path: 'listpromo', canActivate: [LoginGuard], component: ListpromoComponent},
  {path: 'listreference', canActivate: [LoginGuard], component: ListreferentielComponent},
  {path: 'editprofil/:id', canActivate: [LoginGuard], component: EditprofilComponent},
  {path: 'edituser/:id', canActivate: [LoginGuard], component: EditUserComponent},
  {path: 'editcompetence', canActivate: [LoginGuard], component: EditcompetenceComponent},
 ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 providers: [LoginGuard],
})
export class AppRoutingModule { }
