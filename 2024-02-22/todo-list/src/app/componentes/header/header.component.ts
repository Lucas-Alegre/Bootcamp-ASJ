import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  options = ["Home", "Shop", "Demos", "Blocks", "Components", "Contact Us", "My Cart"]
}
