import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/service/personajes.service';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent implements OnInit {
  data: any = [];
  constructor(private servicePersonaje: PersonajesService) { }

  ngOnInit(): void {
    this.servicePersonaje.getPersonajes().subscribe((data) => {
      this.data = data.results;
    })
  }

}
