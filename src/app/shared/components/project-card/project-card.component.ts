import {Component, Input} from '@angular/core';
import {ProjectItemType} from '../../../types/project-item.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: ProjectItemType;

  constructor() {
    this.project = {
      image: '',
      title: '',
      description: '',
      link: ''
    }
  }
}
