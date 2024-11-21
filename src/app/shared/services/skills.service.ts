import {Injectable} from '@angular/core';
import {SkillType} from '../../types/skill.type';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills_: SkillType[] = [
    {
      name: 'HTML',
      level: 'advanced'
    },
    {
      name: 'CSS, SASS',
      level: 'advanced'
    },
    {
      name: 'Javascript',
      level: 'regular'
    },
    {
      name: 'TypeScript',
      level: 'regular'
    },
    {
      name: 'Jquery',
      level: 'beginner'
    },
    {
      name: 'Bootstrap',
      level: 'regular'
    },
    {
      name: 'GIT',
      level: 'regular'
    },
    {
      name: 'Webpack',
      level: 'beginner'
    },
    {
      name: 'Gulp',
      level: 'regular'
    },
    {
      name: 'Angular',
      level: 'regular'
    },
  ];

  private additionalSkills_ = [
    {name: 'Работа с хостингом'},
    {name: 'Адаптивная верстка'},
    {name: 'Чтение тех. документации на английском'},
    {name: 'B1 english'},
    {name: 'Figma, Photoshop'},
    {name: 'RxJs'},
    {name: 'Angular Material'},
    {name: 'PrimeNG'},
    {name: 'PUG'},
  ];

  constructor() {
  }

  get skills(): SkillType[] {
    return this.skills_;
  };

  get additionalSkills(): { name: string }[] {
    return this.additionalSkills_;
  }
}
