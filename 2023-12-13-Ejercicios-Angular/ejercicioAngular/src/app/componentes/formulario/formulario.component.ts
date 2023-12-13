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
   titulo= "";
   frase= "";
   autor= "";

  enviar(){
    localStorage.setItem("titulo", this.titulo.toString());
    localStorage.setItem("frase", this.frase.toString());
    localStorage.setItem("autor", this.autor.toString());
    window.location.href = "/"; 
  }
}

