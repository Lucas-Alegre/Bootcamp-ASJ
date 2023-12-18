import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simpsong-listado',
  templateUrl: './simpsong-listado.component.html',
  styleUrls: ['./simpsong-listado.component.css']
})
export class SimpsongListadoComponent {
  @Input()
  entrada: any;
  
  constructor(){
  }

}
