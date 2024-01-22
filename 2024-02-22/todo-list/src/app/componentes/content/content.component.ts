import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  tareas: any = [];
  existenProductos: boolean = false;;
  constructor(private TareasService: TareasService){
  }
  ngOnInit(): void {
    this.getProductos();
  }
  num: number = 0;

  incrementBy(n: number) {
    this.num += n;
  }

  random() {
    this.num = Math.floor(Math.random() * 11);
  }
  getProductos() {


    this.TareasService.get().subscribe((data) => {
      this.tareas = data
      if (data.length < 1) {
        this.existenProductos = true;
      }
      console.log(this.tareas)
    });
  }


  eliminar(product: any) {

    this.TareasService.delete(product.id).subscribe(res => {
      alert("Se eliminó un producto correctamente")
      this.getProductos()
    })
  }


}
