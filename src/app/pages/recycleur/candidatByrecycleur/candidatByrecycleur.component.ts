import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidatByrecycleur',
  templateUrl: './candidatByrecycleur.component.html',
  styleUrls: ['./candidatByrecycleur.component.scss']
})
export class CandidatByrecycleurComponent implements OnInit {
  candidats: Candidat[]
  idUser: string='64b5e2c0d6c2d6e8b11a33aa'


  constructor(private route: ActivatedRoute, private service: CandidatService) { }

  ngOnInit() {
    this.service.getCandidatByUserId(this.idUser)

  }
  getAll():void{

    this.service.getCandidatByUserId(this.idUser).subscribe(
      (candidats: Candidat[]) => {
        console.log(candidats)
        this.candidats = candidats;
        console.log(candidats);
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidats', error);
      }
    )

  }

}
