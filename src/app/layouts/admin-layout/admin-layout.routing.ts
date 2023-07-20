import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { OffresComponent } from 'src/app/pages/offres/offres.component';
import { UpdateOffresComponent } from 'src/app/pages/updateOffres/updateOffres.component';
import { DetailsOffreComponent } from 'src/app/pages/detailsOffre/detailsOffre.component';
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


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    {path:'offres',component: OffresComponent},
    {path:'updateOffres/:id', component: UpdateOffresComponent},
    {path:'detailsoffre/:id', component:DetailsOffreComponent},
    {path:'offresByRecycleur', component:OffresByRecycleurComponent},

    {path:'candidats', component:CandidatsComponent},
    {path:'candidatByRecycleur/:idUser', component:CandidatByrecycleurComponent},
    {path:'offresByAdmin', component:AppelOffresComponent},
    {path:'updateAdmin/:id', component: UpdateOffreComponent},
    {path:'updateCandidatByAdmin/:id', component: UpdateCandidatComponent},
    {path:'offresByEntreprise',component:OffresByEntrepriseComponent},
    {path:'updateOffreByEntreprise/:id',component:UpdateOffreByEntrepriseComponent},
    {path:'addOffre', component: AddOffreComponent},
    {path:'listCandidatsByEntreprise/:id ', component: ListCandidatsByEntrepriseComponent},
    {path:'detailOffreByRecycleur/:id', component: DetailOffreByRecycleurComponent},
    {path:'souscrire/:id', component: SouscrireComponent}



];
