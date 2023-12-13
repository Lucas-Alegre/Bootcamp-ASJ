import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titulo = localStorage.getItem("titulo");
  frase = localStorage.getItem("frase");
  autor = localStorage.getItem("autor");
  users=[{titulo: this.titulo, frase: this.frase, autor: this.autor}]
}
