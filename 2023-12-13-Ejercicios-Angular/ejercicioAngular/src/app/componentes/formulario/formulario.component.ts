import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  titulo = "";
  frase = "";
  autor = "";
  listaFrases: any = JSON.parse(localStorage.getItem("frases")||"null");
  objeto = {}


  enviar() {
    this.objeto = {
      titulo: this.titulo,
      frases: this.frase,
      autor: this.autor
    }
    this.listaFrases.push(this.objeto)
    localStorage.setItem("frases", JSON.stringify(this.listaFrases));
    window.location.href = "/";
  }
}

