import { Component } from '@angular/core';
import {fadeInLeftOnEnterAnimation, fadeInRightOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  animations: [
    fadeInLeftOnEnterAnimation(),
    fadeInRightOnEnterAnimation(),
    // fadeOutOnLeaveAnimation()
  ],
})
export class ProjectsComponent {
  projects = [
    {
      title:'FQOH portfolio',
      technologies: [
        'Angular',
        'Webflow',
        'Figma',
        'Lotties',
        'jQuery',
      ],
      img: '../../assets/images/fqoh.png',
      link: 'https://fqoh-3e408.web.app/',
    },
    {
      title:'ScoreBoard Pro',
      technologies: [
        'Angular',
        'Angular Material',
        'Node.js',
        'PostgreSQL',
        'Tailwind',
        'jQuery'
      ],
      img: '../../assets/images/sbp.png',
      link: '',
    },

  ]
}
