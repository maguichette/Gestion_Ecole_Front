import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { ListprofilComponent } from './profil/listprofil/listprofil.component';
import { UserComponent } from './user/user.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { AddUsserComponent } from './user/add-usser/add-usser.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { FooterComponent } from './footer/footer.component';
import { AddprofilComponent } from './profil/addprofil/addprofil.component';
import { PromoComponent } from './promo/promo.component';
import { ListpromoComponent } from './Promo/listpromo/listpromo.component';
import { AddpromoComponent } from './Promo/addpromo/addpromo.component';
import { EditprofilComponent } from './profil/editprofil/editprofil.component';

import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { ListprofilsortieComponent } from './profil-sortie/listprofilsortie/listprofilsortie.component';
import { EditprofilsortieComponent } from './profil-sortie/editprofilsortie/editprofilsortie.component';
import { AddprofilsortieComponent } from './profil-sortie/addprofilsortie/addprofilsortie.component';
import { CompetenceComponent } from './competence/competence.component';
import { ListcompetenceComponent } from './competence/listcompetence/listcompetence.component';
import { AddcompetenceComponent } from './competence/addcompetence/addcompetence.component';
import { GroupecompetenceComponent } from './groupecompetence/groupecompetence.component';
import { ListgrpcompetenceComponent } from './groupecompetence/listgrpcompetence/listgrpcompetence.component';
import { ItemsgrpComponent } from './groupecompetence/listgrpcompetence/itemsgrp/itemsgrp.component';
import { AddgrpcompetenceComponent } from './groupecompetence/addgrpcompetence/addgrpcompetence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ListreferentielComponent } from './referentiel/listreferentiel/listreferentiel.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { LoginInterceptor } from './login.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {QRCodeModule} from 'angularx-qrcode';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { EditcompetenceComponent } from './competence/editcompetence/editcompetence.component';
import { UserPipe } from './user.pipe';
/*import {NgxQRCodeModule} from 'ngx-qrcode2';*/
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfilComponent,
    ListprofilComponent,
    UserComponent,
    ListuserComponent,
    AddUsserComponent,
    EditUserComponent,
    DetailUserComponent,
    FooterComponent,
    AddprofilComponent,
    PromoComponent,
    ListpromoComponent,
    AddpromoComponent,
    EditprofilComponent,
   ProfilSortieComponent,
    ListprofilsortieComponent,
    EditprofilsortieComponent,
    AddprofilsortieComponent,
    CompetenceComponent,
    ListcompetenceComponent,
    AddcompetenceComponent,
    GroupecompetenceComponent,
    ListgrpcompetenceComponent,
    ItemsgrpComponent,
    AddgrpcompetenceComponent,
    ListreferentielComponent,
    ReferentielComponent,
    EditcompetenceComponent,
    UserPipe,

 ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        QRCodeModule,
         NgxQRCodeModule,
      AngularMultiSelectModule,
       ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
