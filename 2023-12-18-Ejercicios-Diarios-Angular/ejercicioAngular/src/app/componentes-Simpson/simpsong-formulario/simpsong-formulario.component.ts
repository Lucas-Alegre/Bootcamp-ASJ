import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simpsong-formulario',
  templateUrl: './simpsong-formulario.component.html',
  styleUrls: ['./simpsong-formulario.component.css']
})
export class SimpsongFormularioComponent implements OnInit {
  
  @Output() childEmitter= new EventEmitter<any>();
  nombre = "";
  imagen = "";
  profession = "";
  message: any = {};


  enviar() {
    this.message = { nombre: this.nombre, imagen: this.imagen, profession: this.profession };

    this.childEmitter.emit(this.message)
  }

  ngOnInit(): void {

  }

}
