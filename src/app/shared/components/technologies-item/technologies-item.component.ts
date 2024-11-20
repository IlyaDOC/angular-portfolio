import {Component, Input} from '@angular/core';
import {SkillType} from '../../../types/skill.type';

@Component({
  selector: 'app-technologies-item',
  templateUrl: './technologies-item.component.html',
  styleUrl: './technologies-item.component.scss'
})
export class TechnologiesItemComponent {
  @Input() skill: SkillType;
  constructor() {
    this.skill = {
      name: '',
      level: ''
    }
  }
}
