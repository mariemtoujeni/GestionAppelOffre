import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OffresComponent } from 'src/app/pages/offres/offres.component';
import { DetailsOffreComponent } from 'src/app/pages/detailsOffre/detailsOffre.component';
import { UpdateOffresComponent } from 'src/app/pages/updateOffres/updateOffres.component';
import { OffresByRecycleurComponent } from 'src/app/pages/recycleur/offresByRecycleur/offresByRecycleur.component';

import { CandidatsComponent } from 'src/app/pages/admin/candidats/candidats.component';
import { CandidatByrecycleurComponent } from 'src/app/pages/recycleur/candidatByrecycleur/candidatByrecycleur.component';
import { AppelOffresComponent } from 'src/app/pages/admin/appelOffres/appelOffres.component';
import { UpdateOffreComponent } from 'src/app/pages/admin/updateOffre/updateOffre.component';
import { UpdateCandidatComponent } from 'src/app/pages/admin/updateCandidat/updateCandidat.component';
import { OffresByEntrepriseComponent } from 'src/app/pages/entreprise/offresByEntreprise/offresByEntreprise.component';
import { UpdateOffreByEntrepriseComponent } from 'src/app/pages/entreprise/updateOffreByEntreprise/updateOffreByEntreprise.component';
import { AddOffreComponent } from 'src/app/pages/entreprise/addOffre/addOffre.component';
import { ListCandidatsByEntrepriseComponent } from 'src/app/pages/entreprise/listCandidatsByEntreprise/listCandidatsByEntreprise.component';
import { DetailOffreByRecycleurComponent } from 'src/app/pages/recycleur/detailOffreByRecycleur/detailOffreByRecycleur.component';
import { SouscrireComponent } from 'src/app/pages/recycleur/souscrire/souscrire.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,

    OffresComponent,
    UpdateOffresComponent,
    DetailsOffreComponent,
    OffresByRecycleurComponent,

    CandidatsComponent,
    CandidatByrecycleurComponent,
    AppelOffresComponent,
    UpdateOffreComponent,
    UpdateCandidatComponent,
    OffresByEntrepriseComponent,
    UpdateOffreByEntrepriseComponent,
    AddOffreComponent,
    ListCandidatsByEntrepriseComponent,
    DetailOffreByRecycleurComponent,
    SouscrireComponent
 ]
})

export class AdminLayoutModule {}
