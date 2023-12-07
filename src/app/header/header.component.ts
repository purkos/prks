import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  navs:string[] = [
      'home',
      'projects',
      'about',
      'contact'
  ]
}
