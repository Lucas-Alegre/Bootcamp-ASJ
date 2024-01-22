import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.css']
})
export class AgregarTareasComponent {
  constructor(private tareasService:TareasService, private route: Router) { }

  id: string = '';
  nombre: string = '';
  descripcion: string = '';
  estado: string = '';

  enviar(form: any): void {
    console.log(this.id+"  AA"+ this.nombre+"  AA"+this.descripcion+"  AA"+ this.estado)
    const formData = {
      id: parseInt(this.id),
      nombre: this.nombre,
      descripcion: this.descripcion,
      estado: true,
    };

    this.tareasService.post(formData).subscribe(res => {
      alert("Se agrego un producto correctamente")
      console.log(res)
      this.route.navigate(['/', 'tareas'])
    });

  }

  limpiar() {
    this.id = "";
    this.nombre = "";
    this.descripcion = "";
    this.estado = "";
  }
}
