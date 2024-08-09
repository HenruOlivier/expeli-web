import { Component } from '@angular/core';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-content-outlet',
  standalone: true,
  imports: [IntroPageComponent, IntroductionComponent, TechnologiesComponent, ProjectsComponent],
  templateUrl: './content-outlet.component.html',
  styleUrl: './content-outlet.component.scss'
})
export class ContentOutletComponent {

}
