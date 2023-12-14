import { Component } from '@angular/core';

@Component({
  selector: 'app-simpson-main',
  templateUrl: './simpson-main.component.html',
  styleUrls: ['./simpson-main.component.css']
})
export class SimpsonMainComponent {
  public objetSimpson: any = {};

  printName(objetohijoSimson: any) {
    this.objetSimpson = objetohijoSimson
  }
}
