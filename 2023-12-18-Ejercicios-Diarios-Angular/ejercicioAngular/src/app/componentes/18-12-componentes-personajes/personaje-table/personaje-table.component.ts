import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/service/personajes.service';

@Component({
  selector: 'app-personaje-table',
  templateUrl: './personaje-table.component.html',
  styleUrls: ['./personaje-table.component.css']
})
export class PersonajeTableComponent implements OnInit {
  data = [
    { id: 1, name: "Lucas", status: "viwvo", image: "imwg" },
    { id: 2, name: "Lucatts", status: "vivo", image: "img" },
    { id: 1, name: "Lucas", status: "vivo", image: "img" }
  ]
  data2: any = [];
  constructor(private servicePersonajes: PersonajesService) { }

  ngOnInit(): void {
    this.servicePersonajes.getPersonajes().subscribe((data) => {
      this.data2 = data.results;
      console.log(this.data2)
    })
  }

}
