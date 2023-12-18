import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  constructor(private router: Router) {
  }
  getUrl(url: string) {
    console.log(url=== this.router.url);
    return url === this.router.url;
  }
}
