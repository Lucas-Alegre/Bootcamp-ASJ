import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioAngular';
  nombre="Lucas";
  apellido="AlEgrE"
  total=34.35; 
  fecha=new Date()

}
