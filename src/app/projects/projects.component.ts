import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  projects = [
    {
      title:'project 1',
      technologies: [
          'Angular',
          'Webflow',
          'Figma',
          'Lotties',
          'jQuery'
      ],
      img: '../../assets/images/peaks-bg.png',
      link: '',
    },
    {
      title:'project 2',
      technologies: [
        'Angular',
        'Webflow',
        'jQuery'
      ],
      img: '../../assets/images/peaks.png',
      link: '',
    }
  ]
}
