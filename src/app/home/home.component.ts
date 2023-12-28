import { Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    fadeInLeftOnEnterAnimation(),
    fadeInRightOnEnterAnimation(),
    // fadeOutOnLeaveAnimation()
  ],
})
export class HomeComponent {

}
