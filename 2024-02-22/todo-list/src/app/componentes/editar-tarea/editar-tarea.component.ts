import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit{
  constructor(private tareasService:TareasService, private route: Router,
    private _activateRoute: ActivatedRoute) { }
    
  idUrl:any;
  id: string = '';
  nombre: string = '';
  descripcion: string = '';
  estado: string = '';

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(data => {
      this.idUrl = data.get('id');
    })
  }

  enviar(form: any): void {
    console.log(this.idUrl + " es mi id")
    const formData = {
      id: parseInt(this.id),
      nombre: this.nombre,
      descripcion: this.descripcion,
      estado: true,
    };

    this.tareasService.put(formData,this.idUrl).subscribe(res => {
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
