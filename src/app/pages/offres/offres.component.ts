import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

interface Offre {
  _id: string;
  titre: string;
  description: number;
  dateDebut: Date;
  dateFin: Date;

}

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {
  offres: Offre[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchOffres()
  }
  fetchOffres() {
    this.http.get<Offre[]>('http://localhost:3000/appelOffre').subscribe(data=>{this.offres=data},error=>{console.error('Erreur lors de la récupération des poubelles', error);});


  }
  supprimerOffres(offresId: string) {

    this.http.delete('http://localhost:3000/appelOffre/' + offresId)

      .subscribe(() => {

        console.log('Poubelle supprimée');

        this.fetchOffres();

      }, error => {

        console.error('Erreur lors de la suppression d/offres', error);

      });

  }
  modifierOffres(offresId) {


    this.router.navigate(['/updateOffres', offresId]);

  }

  voirDetailsOffre(offreId: string) {
    this.router.navigate(['/detailsoffre', offreId]);
  }

}
